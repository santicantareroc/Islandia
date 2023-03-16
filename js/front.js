
        const d = document;
        const main = d.querySelector('#main');
        const logo = d.querySelector('.logo');
        const burger = d.querySelector('.burger');
        let range = 12 * 2 //20 px * 2
        yLimit = 7;
        xLimit = 7;
        _yLimit = -9;
        _xLimit = -9;

        function follow(e) {
            let { offsetX: x, offsetY: y } = e;
            if (this !== e.target) {
                x = x + e.target.offsetLeft;
                y = y + e.target.offsetTop;
            }

            // height and width of div.main
            const { offsetWidth: width, offsetHeight: height } = this;
            const xRange = Math.round( (x/width * range)  - range/2 );
            const yRange = Math.round( (y/height * range) - range/2 );
            if(yRange<=yLimit && xRange<=xLimit && yRange>_yLimit && xRange>_xLimit )
                this.querySelector('.follow').style.transform ='translateX('+xRange+'px) translateY('+yRange+'px)';
            else
                this.querySelector('.follow').style.transform ='translateX(0px) translateY(0px)';
        }

        main.addEventListener('mousemove', follow);
        logo.addEventListener('mousemove', follow);
        burger.addEventListener('mousemove', follow);

        function goBack(e) {
            this.querySelector('.follow').style.transform ='translateX(0px) translateY(0px)';
        }

        logo.addEventListener('mouseout',goBack);
        burger.addEventListener('mouseout', goBack);

        const navIcon = d.querySelector('#nav-icon');
        navIcon.addEventListener('click',function(e){this.classList.toggle("open")});

        function activeMenu(e){
            d.querySelector('#right_part').classList.toggle('active');
            d.querySelector('.text').classList.toggle('active');
            d.querySelector('.social_fade').classList.toggle('active');
            d.querySelector('.cnt_img').classList.toggle('active');
            d.querySelectorAll('.menu ul li').forEach(showMenuItem);
            
        }

        function showMenuItem(item, index) {
            setTimeout(function() {
                item.classList.toggle('active')
            }, (index+1)+500);
        }

        navIcon.addEventListener('click',activeMenu);

