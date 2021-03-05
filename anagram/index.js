var words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
let cache = {}

function sortValue(word){
    let arr = word.split('');
    for(let i = 0; i < arr.length; i++){
        for(let x = 0; x < arr.length; x++){
            if(arr[x] > arr[x + 1]){
                let tmp = arr[x];
                arr[x] = arr[x + 1]
                arr[x + 1] = tmp
            }
        }
    } 
    return arr
}


words.forEach(word => {
    var split = sortValue(word);
    if(cache[split]){
        cache[split].push(word)
    }else{
        cache[split] = [word]
    }
})

const keys = Object.keys(cache);
const collected = keys.map(key => cache[key]);
console.log(collected)

