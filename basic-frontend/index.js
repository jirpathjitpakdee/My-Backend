function getData() {
    fetch('http://localhost:3000/locations')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            const container = document.getElementById('card-container');
            let html = '';
            for (let i = 0; i < res.length; i++) {
                if (i % 3 === 0) {
                    html += '<div class="row mt-3">';
                }
                const imageUrl = res[i].media[0].image[0].imageUrl || '';
                html += `
                    <div class="col-4">
                        <div class="card" style="width: 15rem; cursor: pointer;" onclick="goToNextPage(${res[i]._id})">
                            <img src="${imageUrl}" alt="" style="width: 15rem; height: 15rem;">
                            <p class="text-center mt-1">${res[i].name}</p>
                        </div>
                    </div>
                `;
                if ((i + 1) % 3 === 0 || (i + 1) === res.length) {
                    html += '</div>';
                }
            }
            container.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
}

function goToNextPage(id) {
    window.location.href = `detail.html`;
    sessionStorage.setItem("id", id);

}

function getDetail() {
    const id = sessionStorage.getItem('id');
    fetch(`http://localhost:3000/locations/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            const container = document.getElementById('id');
            let html = '';
            let informant = '';
            let contact = '';
            for (let i = 0; i < res[0].info[0].informant.length; i++) {
                informant += res[0].info[0].informant[i] + " ";
            }
            for (let i = 0; i < res[0].info[0].contact.length; i++) {
                contact += res[0].info[0].contact[i] + " ";
            }

            html += `
                <div class="card pl-5 pt-3 pr-5 pb-3" style="width: 100%; ">
                <p class="d-flex justify-content-start pt-3">ชื่อ: ${res[0].name}</p>
                <p class="d-flex justify-content-start ">รายละเอียด: ${res[0].info[0].description}</p>
                <p class="d-flex justify-content-start">ที่อยู่: หมู่ที่ ${res[0].address.village} ตำบล ${res[0].address.district}</p>
                <p class="d-flex justify-content-start">พิกัด: ละติจูด ${res[0].location.lat} ลองจิจูด ${res[0].location.lon}</p>
                <p class="d-flex justify-content-start">ประเภท: ${res[0].info[0].category}</p>
                <p class="d-flex justify-content-start">อายุ: ${res[0].info[0].age}</p>
                <p class="d-flex justify-content-start">ศาสนา: ${res[0].info[0].religion}</p>
                <p class="d-flex justify-content-start">รูปแบบพื้นที่: ${res[0].info[0].area}</p>
                <p class="d-flex justify-content-start ">เรื่องเล่า: ${res[0].info[0].story}</p>
                <p class="d-flex justify-content-start">วันที่บันทึกข้อมูล: ${res[0].info[0].date}</p>
                <p class="d-flex justify-content-start">ผู้ให้ข้อมูล: ${informant}</p>
                <p class="d-flex justify-content-start">การติดต่อผู้ให้ข้อมูล: ${contact}</p>
                <button type="button" class="btn btn-success " >Edit</button>
            </div>
                `;


            container.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
}

function create() {
    const url = 'http://localhost:3000/create';
    const name = document.getElementById('name');
    const lat = document.getElementById('lat');
    const lon = document.getElementById('lon');
    const category = document.getElementById('category');
    const age = document.getElementById('age');
    const religion = document.getElementById('religion');
    const area = document.getElementById('area');
    const story = document.getElementById('story');
    const owner = document.getElementById('owner');
    const informant = document.getElementById('informant');
    const contact = document.getElementById('contact');
    const date = document.getElementById('date');
    const village = document.getElementById('village');
    const district = document.getElementById('district');
    const description = document.getElementById('description');
    const data = {
        name: name.value,
        lat: parseFloat(lat.value),
        lon: parseFloat(lon.value),
        village: parseInt(village.value),
        district: district.value,
        info: null,
        media: null,
        category: category.value,
        description: description.value,
        age: parseInt(age.value),
        story: story.value,
        religion: religion.value,
        area: area.value,
        date: date.value,
        informant: informant.value,
        owner: owner.value,
        contact: contact.value,
        imageName: null,
        imageUrl: null,
        audioName: null,
        audioUrl: null,
        videoName: null,
        videoUrl: null
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (response.status === 201) {
                console.log('Document created successfully');
                console.log(JSON.stringify(data));
                window.location.href = `index.html`;
            } else {
                console.error('Error creating document');
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

$(function () {
    $('#datepicker').datepicker();
});