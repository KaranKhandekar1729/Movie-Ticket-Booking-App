let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
// console.log(url_segment);


let play_btn = document.getElementById('play');
let video = document.getElementById('video');


play_btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    } else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
})

video.addEventListener('ended', () => {
    video.play();
})

let date = new Date();
let main_date = date.getDate();
// console.log(main_date);

Array.from(document.getElementsByClassName('date-point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6-active');
    }
})

let pvr = [
    {
        pvr: 'PVR Absolute',
        movie: 'Kraven',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 18,
        img: 'assets/images/kraven.png',
        video: 'assets/video/kraven.mp4',
        background: 'assets/images/kra.jpg',
    },
    {
        pvr: 'PVR Absolute',
        movie: 'MysteriousSkin',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
        h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
        f: [1, 3, 13, 15, 22],
        e: [3, 9, 10, 20, 24],
        d: [7, 12, 9, 21, 20],
        c: [6, 8, 11, 12, 19],
        b: [8, 5, 12, 13, 14],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 18,
        img: 'assets/images/mysterious_skin.jpg',
        video: 'assets/videos/mysterious skin.mp4',
        background: 'assets/images/mysterious_skin_bg.jpg',
    },
    {
        pvr: 'PVR Absolute',
        movie: 'Maurice',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 18,
        img: 'assets/images/maurice_poster.jpg',
        video: 'assets/videos/maurice.mp4',
        background: 'assets/images/maurice_bg.jpg',
    },
    {
        pvr: 'PVR Absolute',
        movie: 'AllAboutLilyChouChou',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 18,
        img: 'assets/images/all about lily chou chou.jpg',
        video: 'assets/videos/maurice.mp4',
        background: 'assets/images/ablcc_bg.jpg',
    },
    {
        pvr: 'PVR Absolute',
        movie: 'Picnic',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 18,
        img: 'assets/images/picnic_poster.jpg',
        video: 'assets/videos/maurice1.mp4',
        background: 'assets/images/picnic_bg.jpg',
    },
    {
        pvr: 'PVR Absolute',
        movie: 'MirroredMind',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 18,
        img: 'assets/images/mirrore_mind.jpg',
        video: 'assets/videos/maurice1.mp4',
        background: 'assets/images/mirrore_mind_bg.jpg',
    },
]

let addSeats = (arr) => {
    arr.forEach((el, i) => {
        const { series, row_section, seat, price, a, b, c, d, e, f, h, j } = el;

        // Create row
        for (let index = 0; index < series.length; index++) {
            // console.log(series[index]);
            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];
            booked_seats = [...eval(series[index].toLocaleLowerCase())];
            // console.log(booked_seats);

            // Create seats
            for (let seats = 0; seats < seat; seats++) {

                if (seats === 0) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                };

                let li = document.createElement('li');
                let filter = booked_seats.filter(el => {
                    return el === seats;
                })

                if (filter.length > 0) {
                    li.className = "seat booked";
                } else {
                    li.className = "seat";
                }

                li.id = series[index] + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', series[index]);
                li.innerText = price[index];

                li.onclick = () => {
                    if (li.className === 'seat booked') {
                        li.classList.remove('selected');
                    } else {
                        li.classList.add('selected');
                    }
                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    if (len > 0) {
                        document.getElementById('book-ticket').style.display = 'unset';
                    } else {
                        document.getElementById('book-ticket').style.display = 'none';
                    }
                }

                row.appendChild(li);

                if (seats === seat - 1) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }
            }

            document.getElementById('chair').appendChild(row);
        }

    })
}

let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
// console.log(data);

document.getElementById('title').innerText = data[0].movie;
document.getElementById('poster').src = data[0].img;
document.getElementById('video').src = data[0].video;

var styleElem = document.head.appendChild(document.createElement("style"));

styleElem.innerHTML = `.book .right:before {background: url(${data[0].background})no-repeat center -30px/cover}`;

addSeats(data);

let offDate = () => {
    Array.from(document.getElementsByClassName('date-point')).forEach(el => {
        el.classList.remove('h6-active');
    })
}

Array.from(document.getElementsByClassName('date-point')).forEach(el => {
    el.addEventListener('click', () => {
        if (el.innerText > date.getDate()-1) {
            offDate();
            el.classList.add('h6-active');
            main_date = +el.innerText;
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
            addSeats(data);
        }
    })
})

document.getElementById('book-ticket').addEventListener('click', () => {
    Array.from(document.getElementsByClassName('selected')).forEach(el => {
        let seat_no = el.getAttribute('book');
        let seat_sr = el.getAttribute('sr').toLocaleLowerCase();
        let seat_price = el.innerText;

        let obj = {
            movie: url_segment[1],
            date: main_date
        }

        let getData = pvr.map((obj) => {
            if (
                obj.movie === url_segment[1] && obj.date === main_date
            ) {
                obj[seat_sr].push(+seat_no);
            }
            return obj;
        });
        // console.log(getData)

        document.getElementById('chair').innerHTML = '';

        let data = getData.filter(obj => obj.date === main_date && obj.movie === url_segment[1]);
        addSeats(data);

        document.getElementById('screen').style.display = 'none';
        document.getElementById('chair').style.display = 'none';
        document.getElementById('det').style.display = 'none';
        document.getElementById('book-ticket').style.display = 'none';
        document.getElementById('back-ticket').style.display = 'unset';
        document.getElementById('ticket').style.display = 'block';

        let tic = document.createElement('div');
        tic.className = 'ticket';

        tic.innerHTML = `
            <div class="barcode">
            <div class="card">
                <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
                <h6>${main_date} January 2025</h6>
            </div>
            <div class="card">
                <h6>Seat ${seat_no}</h6>
                <h6>19:00</h6>
            </div>
        
            <svg id="${seat_sr}${seat_no}barcode"></svg>
            <h5>ABSOLUTE CINEMA</h5>
        </div>
        <div class="details" style=" background: url(${data[0].background})no-repeat center -35px /cover">
            <div class="type">4DX</div>
            <h5 class="pvr"><span>Absolute</span> Cinema</h5>
            <h1>${url_segment[1]}</h1>
            <div class="seat-details">
                <div class="seat-card">
                    <h6>ROW</h6>
                    <h6>${seat_sr.toLocaleUpperCase()}</h6>
                </div>
                <div class="seat-card">
                    <h6>SEAT</h6>
                    <h6>${seat_no}</h6>
                </div>
                <div class="seat-card">
                    <h6>DATE</h6>
                    <h6>${main_date}<sub>jan</sub></h6>
                </div>
                <div class="seat-card">
                    <h6>TIME</h6>
                    <h6>19:00 <sub>pm</sub></h6>
                </div>
            </div>
        </div> 
        `
        document.getElementById('ticket').appendChild(tic);

        JsBarcode(`#${seat_sr}${seat_no}barcode`,
            `${seat_sr.toLocaleUpperCase()}${seat_no}${seat_price}${main_date}12025`);
    })
})

document.getElementById('back-ticket').addEventListener('click', () => {
    document.getElementById('screen').style.display = 'inline-block';
    document.getElementById('chair').style.display = 'block';
    document.getElementById('det').style.display = 'flex';
    document.getElementById('book-ticket').style.display = 'unset';
    document.getElementById('back-ticket').style.display = 'none';
    document.getElementById('ticket').style.display = 'none';

})