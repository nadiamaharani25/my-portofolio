let blogs = []


function addBlog() {
    // Name
    let name = document.getElementById('input-project-name').value;


    //Date
    let dates1 = document.getElementById('inputStartDate').value;
    let dates2 = document.getElementById('inputEndDate').value;

    let start = new Date(dates1);
    const end = new Date(dates2);


    // Description
    let description = document.getElementById('input-description').value;


    // Checkbox
    let btnShow = document.getElementById('btnShow');
    let text = `<span> submit </span>`;

    let vcheckbox = document.forms[0];
    let icon = "";
    let i;

    for (i = 0; i < vcheckbox.length; i++) {
        if (vcheckbox[i].checked) {
            icon = icon + vcheckbox[i].value + "";
            btnShow.innerHTML = text;
            console.log({ icon });
        }
        btnShow = document.getElementById('btnShow').value = text;
    }


    // Images
    let images = document.getElementById('input-blog-image').files[0];

    images = URL.createObjectURL(images);

    let blog = {
        name: name,
        dates1: start,
        dates2: end,
        description: description,
        btnShow: btnShow,
        icon: icon,
        images: images,
        postedAt: new Date(),
    }

    console.log(name)
    console.log(`${dates1} - ${dates2}`)
    console.log(description)
    console.log(images)


    blogs.push(blog)

    renderBlog()
}


function renderBlog() {

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = `
    <!-- Blog List Item 1 -->
                <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="assets/logonadia.png" alt="">
                    </div>

                    <h3>
                        <a href="blog-detail.html" target="_blank" style="text-decoration: none;">
                            Portofolio Logo Sederhana
                    </h3>
                    <h5>
                        durasi: 2 days
                    </h5>

                    <div class="detail-blog-content">
                        <p>
                            Desain logo ini dibuat dengan menggunakan Adobe Photoshop dan Adobe Ilustrator
                        </p>
                    </div>

                    <div class="icon">
                        <img src="assets/react.png" alt="" style="width: 48px;">
                        <img src="assets/node.png" alt="" style="width: 45px;">
                        <img src="assets/next.png" alt="" style="width: 43px;">
                        <img src="assets/typescript.png" alt="" style="width: 39px;">
                    </div>

                    <div class="blog-content">
                        <div class="button-group">
                            <a href="https://drive.google.com/file/d/1muWWLcTjwKSpx_t5KF2Nh_ISCBaaT2xK/view?usp=sharing" target="_blank" class="button-edit">open</a>
                        </div>
                    </div>
                </div>
                <!-- Blog List Item 1 -->
                
                <!-- Blog List Item 2 -->
                <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="assets/mobile.jpg" alt="">
                    </div>

                    <h3>
                        <a href="blog-detail.html" target="_blank" style="text-decoration: none;">
                            Simple Video With After Effect
                    </h3>
                    <h5>
                        durasi: 3 days
                    </h5>

                    <div class="detail-blog-content">
                        <p>
                            Video ini dibuat dengan menggunakan Adobe After Effect dengan animasi sederhana
                        </p>
                    </div>

                    <div class="icon">
                        <img src="assets/react.png" alt="" style="width: 48px;">
                        <img src="assets/node.png" alt="" style="width: 45px;">
                        <img src="assets/next.png" alt="" style="width: 43px;">
                        <img src="assets/typescript.png" alt="" style="width: 39px;">
                    </div>

                    <div class="blog-content">
                        <div class="button-group">
                            <a href="https://drive.google.com/file/d/1mh8m306ffUhl5BYRf7MO91b1gUvZumko/view?usp=sharing" target="_blank" class="button-edit">open</a>
                        </div>
                    </div>
                </div>
                <!-- Blog List Item 2 -->
                
                <!-- Blog List Item 3 -->
                <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="assets/html.jpg" alt="">
                    </div>

                    <h3>
                        <a href="blog-detail.html" target="_blank" style="text-decoration: none;">
                            UI Design With Figma
                    </h3>
                    <h5>
                        durasi: 5 days
                    </h5>

                    <div class="detail-blog-content">
                        <p>
                            UI (User Interface) Design adalah desain antarmuka sebuah aplikasi yang dibuat dengan figma
                        </p>
                    </div>

                    <div class="icon">
                        <img src="assets/react.png" alt="" style="width: 48px;">
                        <img src="assets/node.png" alt="" style="width: 45px;">
                        <img src="assets/next.png" alt="" style="width: 43px;">
                        <img src="assets/typescript.png" alt="" style="width: 39px;">
                    </div>

                    <div class="blog-content">
                        <div class="button-group">
                            <a href="https://www.figma.com/proto/GD6PNHfCkIBEmj56ZwJJEd/Food-App?node-id=2%3A2&scaling=contain&page-id=0%3A1&starting-point-node-id=2%3A2" target="_blank" class="button-edit">open</a>
                        </div>
                    </div>
                </div>
                <!-- Blog List Item 3 -->`

    for (let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += `
    <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="${blogs[i].images}" alt="">
                    </div>

                    <h3>
                        <a href="blog-detail.html" target="_blank" style="text-decoration: none;">${blogs[i].name}
                    </h3>
                    <h5>
                        durasi: ${getDuration(blogs[i].dates1, blogs[i].dates2)}
                    </h5>

                    <div class="detail-blog-content">
                        <p>
                            ${blogs[i].description}
                        </p>
                    </div>
                    <div style="text-align: right; margin-top: 10px; margin-right: 10px; color: gray;">
                        ${getDistanceTime(blogs[i].postedAt)}
                    </div>

                    <div class="icon">
                        ${blogs[i].icon}
                    </div>


            <div class="blog-content">


                <div class="button-group">
                    <a href="#" class="button-edit">edit</a>
                    <a href="#" class="button-delete">delete</a>
                </div>
            </div>
                </div > `
    }
}


function getDuration(dates1, dates2) {

    let duration = dates2 - dates1 // miliseconds

    let monthDuration = Math.floor(duration / (4 * 7 * 24 * 60 * 60 * 1000)) // convert to month
    if (monthDuration != 0) {
        return `${monthDuration} month`
    } else {
        let weekDuration = Math.floor(duration / (7 * 24 * 60 * 60 * 1000))
        if (weekDuration != 0) {
            return `${weekDuration} week`
        } else {
            let dayDuration = Math.floor(duration / (24 * 60 * 60 * 1000))
            if (dayDuration != 0) {
                return `${dayDuration} day`
            }
        }
    }
}


function getDistanceTime(time) {
    let timeNow = new Date()
    let timeBlog = new Date(time)

    // console.log('Now: ', timeNow)
    // console.log('Blog: ', timeBlog)

    let distance = timeNow - timeBlog // miliseconds

    let dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000)) // convert to day

    if (dayDistance != 0) {
        return dayDistance + ' day ago'
    } else {
        let hourDistance = Math.floor(distance / (60 * 60 * 1000))
        if (hourDistance != 0) {
            return hourDistance + ' hours ago'
        } else {
            let minuteDistance = Math.floor(distance / (60 * 1000))
            if (minuteDistance != 0) {
                return minuteDistance + ' minute ago'
            } else {
                let secondDistance = Math.floor(distance / 1000)
                return secondDistance + ' seconds ago'
            }
        }
    }
}


setInterval(function () {
    renderBlog()
}, 1000)
