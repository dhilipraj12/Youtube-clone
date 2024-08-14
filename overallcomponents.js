const overall = [{
    title: "Welcome to python programming",
    videothumbnail: "./images/python-programming-language.webp",
    profile: "./images/training-on-python.jpg",
}];

function overallcomponents() {
    let over = "";
    overall.forEach((ele) => {
        over += `<div class="video">
                    <div class="videothumbnail">
                        <img src="${ele.videothumbnail}"/>
                    </div>
                    <div class="video_details">
                        <div class="profile">
                            <img src="${ele.profile}"/>
                        </div>
                        <div class="title">
                            <h3>${ele.title}</h3>
                            <a href="${ele.title}">Myproject</a>
                        </div>
                    </div>
                </div>`
    });

    document.getElementsByClassName("video")[0].innerHTML = over;
}

overallcomponents();
