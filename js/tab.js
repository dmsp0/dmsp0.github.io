
        function openTab(event, inform){
            let tabPage, tablinks;
            // tabPage = document.querySelector('.tabPage');
            tabPage = document.getElementsByClassName('tabPage');
            tablinks = document.getElementsByClassName('tablinks');
    
            for(let i=0; i<tabPage.length; i++){
                tabPage[i].style.display = 'none';
            }
    
            for(let i=0; i<tablinks.length; i++){
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
    
            document.getElementById(inform).style.display = 'block';
            event.currentTarget.className += " active";
        }
