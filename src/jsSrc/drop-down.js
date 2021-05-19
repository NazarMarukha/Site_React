function openPoints(e) {
            let coll = e.target;
            let content = coll.nextElementSibling;

            coll.classList.toggle('activated'); //Повернути стрілку

            if(content.style.maxHeight){        //Розкрити меню
                content.style.maxHeight = null;
            } else{
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }

export default openPoints

