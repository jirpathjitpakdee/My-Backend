const express = require('express');
const { MongoClient } = require("mongodb");
const { BlobServiceClient, StorageSharedKeyCredential } = require('@azure/storage-blob');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;
const host = '192.168.1.13';
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);


const connectDB = async () => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log(`MongoDB connected successfully.`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
connectDB();


const accountName = 'imagetest';
const accountKey = 'ZIxXCD6vzXGlKJ/URzMayb/8Om/5sY+UY8VsyXkHjItpLx/oyA7bwUlU2yqoa2vr/rqcrc5hhTaM+AStyW8lug==';

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, sharedKeyCredential);

const containerName = ['image', 'audio', 'video'];
const containerClient1 = blobServiceClient.getContainerClient(containerName[0]);
const containerClient2 = blobServiceClient.getContainerClient(containerName[1]);
const containerClient3 = blobServiceClient.getContainerClient(containerName[2]);


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Success' });
});

app.get('/locations', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const locations = await client.db('ProjectTest').collection('Locations').aggregate([
            {
                $lookup: {
                    from: 'Information',
                    localField: 'info',
                    foreignField: '_id',
                    as: 'info'
                }
            },
            {
                $lookup: {
                    from: 'Media',
                    localField: 'media',
                    foreignField: '_id',
                    as: 'media'
                }
            }
        ]).toArray();

        res.status(200).json(locations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching location data' });
    } finally {
        await client.close();
    }
});

app.get('/locations/:id', async (req, res) => {
    const locationId = parseInt(req.params.id);
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const locations = await client.db('ProjectTest').collection('Locations').aggregate([
            {
                $match: { _id: locationId }
            },
            {
                $lookup: {
                    from: 'Information',
                    localField: 'info',
                    foreignField: '_id',
                    as: 'info'
                }
            },
            {
                $lookup: {
                    from: 'Media',
                    localField: 'media',
                    foreignField: '_id',
                    as: 'media'
                }
            }
        ]).toArray();

        res.status(200).json(locations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching location data' });
    } finally {
        await client.close();
    }
});


app.post('/create', async (req, res) => {

    const document1 = {
        name: req.body.name,
        location: {
            lat: req.body.lat,
            lon: req.body.lon
        },
        address: {
            village: req.body.village,
            district: req.body.district
        },
        info: null,
        media: null
    };

    const document2 = {
        category: req.body.category,
        description: req.body.description,
        age: req.body.age,
        story: req.body.story,
        religion: req.body.religion,
        area: req.body.area,
        date: req.body.date,
        owner: req.body.owner,
        informant: req.body.informant,
        contact: [req.body.contact]
    };

    const document3 = {
        image: [
            {
                imageName: req.body.imageName,
                imageUrl: req.body.imageUrl
            }
        ],
        audio: [
            {
                audioName: req.body.audioName,
                audioUrl: req.body.audioUrl
            }
        ],
        video: [
            {
                videoName: req.body.videoName,
                videoUrl: req.body.videoUrl
            }
        ]
    };

    try {
        const database = client.db('ProjectTest');
        const collection1 = database.collection('Locations');
        const collection2 = database.collection('Information');
        const collection3 = database.collection('Media');


        const result = await collection1.insertOne(document1);
        const insertedId = result.insertedId;
        document1.info = insertedId;
        document1.media = insertedId;
        await collection1.updateOne({ _id: insertedId }, { $set: document1 });

        document2._id = insertedId;
        document3._id = insertedId;


        await collection2.insertOne(document2);
        await collection3.insertOne(document3);

        res.status(201).json({ message: 'Document created' });
    } catch (error) {
        console.error('Error creating document:', error);
        res.status(500).json({ message: 'Error creating document' });
    }
});

app.put('/update/:id', async (req, res) => {
    const documentToUpdate = {
        name: req.body.name,
        location: {
            lat: req.body.lat,
            lon: req.body.lon
        },
        address: {
            village: req.body.village,
            district: req.body.district
        },
        info: req.body.info,
        media: req.body.media
    };

    const locationId = parseInt(req.params.id);

    try {
        const database = client.db('ProjectTest');
        const collection = database.collection('Locations');

        const updateResult = await collection.updateOne(
            { _id: locationId },
            { $set: documentToUpdate }
        );

        if (updateResult.matchedCount === 0) {
            res.status(404).json({ message: 'Document not found' });
            return;
        }

        res.status(200).json({ message: 'Document updated successfully' });
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ message: 'Error updating document' });
    }
});


app.delete('/delete/locations/:id', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const locationId = parseInt(req.params.id);


        const queryResult = await client.db('ProjectTest').collection('Media').findOne({ _id: locationId });

        if (queryResult) {

            for (let i of queryResult.imageName) {
                const blobClient = containerClient1.getBlobClient(i);
                await blobClient.delete();
            }

            for (let i of queryResult.audioName) {
                const blobClient = containerClient2.getBlobClient(i);
                await blobClient.delete();
            }

            for (let i of queryResult.videoName) {
                const blobClient = containerClient3.getBlobClient(i);
                await blobClient.delete();
            }


            const deleteLocationResult = await client
                .db('ProjectTest')
                .collection('Locations')
                .deleteOne({ _id: locationId });

            if (deleteLocationResult.deletedCount === 0) {
                res.status(404).json({ message: 'Location not found' });
                return;
            }

            await client
                .db('ProjectTest')
                .collection('Information')
                .deleteOne({ _id: locationId });

            await client
                .db('ProjectTest')
                .collection('Media')
                .deleteOne({ _id: locationId });

            res.status(204).json({ msg: 'good' });
        } else {
            res.status(404).json({ message: 'Document not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting location and associated data' });
    } finally {
        await client.close();
    }
});

app.delete("/deletefile/filename", async (req, res) => {
    const filename = req.params.url;
    const blobClient = containerClient.getBlobClient(filename);
    const response = await blobClient.delete();
    res.status(204).json({ message: 'Success' });
});

app.listen(port, host, () => {
    console.log(`[${host}:${port}] server is running`)
})
