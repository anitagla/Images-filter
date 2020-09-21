
const buttons = document.querySelectorAll('.filters .btn');
var img = document.querySelectorAll('.animal-item') 
console.log(buttons);
// console.log(buttons.dataset.filter);
console.log(img);


buttons.forEach(function(animals){
    animals.addEventListener('click', function(e){
        //prevent the default link jump to top of page
        e.preventDefault();
        //grab filter button
        const filter = e.target.dataset.filter;
        //dry kod
        img.forEach(function(item){
            if(filter === 'all'){
                item.style.display = 'block';
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = 'block';
                }else{
                    item.style.display = 'none'
                }
            }
        })
        //duży kod
        // if(filter === 'all'){
        //     img.forEach(function(item){
        //         item.style.display = 'block';
        //     })
        // }
        // else if(filter === 'dogs'){
        //     img.forEach(function(item){
        //         if(item.classList.contains('dogs')){
        //             item.style.display = 'block';
        //         } else{
        //             item.style.display = 'none'
        //         }
        //     })
        // }
        // else if(filter === 'cats'){
        //     img.forEach(function(item){
        //         if(item.classList.contains('cats')){
        //             item.style.display = 'block';
        //         } else{
        //             item.style.display = 'none'
        //         }
        //     })
        // }
        // else if(filter === 'goats'){
        //     img.forEach(function(item){
        //         if(item.classList.contains('goats')){
        //             item.style.display = 'block';
        //         } else{
        //             item.style.display = 'none'
        //         }
        //     })
        // }
    })
});
// if(buttons.dataset.filter == 'all'){
//     console.log('oso');
//     img.style.display = 'block'
// }

function show(){

}

// let animals = document.getElementById('animals');
// console.log(animals.dataset.item);