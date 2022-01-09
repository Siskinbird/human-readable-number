module.exports = function toReadable (number) {
    let numbers = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen', 'eighteen','nineteen', 'twenty'];
    let ty = ['null','null','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    if (number <= 20) {
        return numbers[number];
    }
    if (number > 20 && number < 100) {
        let arr = number.toString().split('');
        if(arr.length === 2) {
            let i = ty[arr[0]];
            let x = numbers[arr[1]];
            if(x === 'zero'){
                return i;
            }
            return i + ' ' + x;
        }
    }

    if (number % 100 === 0) {
        let arr = number.toString().split('');
        return numbers[arr[0]] + ' hundred';
    }

    if(number > 100 && number <= 120) {
        let arr = number.toString().split('');
        let hun = arr[0];
        let newArr = arr.slice(1);
        if(newArr[0] === '0') { 
            newArr = newArr[1];
            return numbers[hun] + ' hundred ' + numbers[newArr];
        }
        newArr = newArr[0] + newArr[1];
        return numbers[hun] + ' hundred ' + numbers[newArr];
    }

    if(number > 200 && number <= 220) {
        let arr = number.toString().split('');
        let hun = arr[0];
        let newArr = arr.slice(1);
        if(newArr[0] === '0') { 
            newArr = newArr[1];
            return numbers[hun] + ' hundred ' + numbers[newArr];
        }
        newArr = newArr[0] + newArr[1];
        return numbers[hun] + ' hundred ' + numbers[newArr];
    }

    if(number > 300 && number <= 320) {
        let arr = number.toString().split('');
        let hun = arr[0];
        let newArr = arr.slice(1);
        if(newArr[0] === '0') { 
            newArr = newArr[1];
            return numbers[hun] + ' hundred ' + numbers[newArr];
        }
        newArr = newArr[0] + newArr[1];
        return numbers[hun] + ' hundred ' + numbers[newArr];
    }

    if(number > 400 && number <= 420) {
        let arr = number.toString().split('');
        let hun = arr[0];
        let newArr = arr.slice(1);
        if(newArr[0] === '0') { 
            newArr = newArr[1];
            return numbers[hun] + ' hundred ' + numbers[newArr];
        }
        newArr = newArr[0] + newArr[1];
        return numbers[hun] + ' hundred ' + numbers[newArr];
    }

    if(number > 500 && number <= 520) {
        let arr = number.toString().split('');
        let hun = arr[0];
        let newArr = arr.slice(1);
        if(newArr[0] === '0') { 
            newArr = newArr[1];
            return numbers[hun] + ' hundred ' + numbers[newArr];
        }
        newArr = newArr[0] + newArr[1];
        return numbers[hun] + ' hundred ' + numbers[newArr];
    }

    if(number > 600 && number <= 620) {
        let arr = number.toString().split('');
        let hun = arr[0];
        let newArr = arr.slice(1);
        if(newArr[0] === '0') { 
            newArr = newArr[1];
            return numbers[hun] + ' hundred ' + numbers[newArr];
        }
        newArr = newArr[0] + newArr[1];
        return numbers[hun] + ' hundred ' + numbers[newArr];
    }

    if(number > 700 && number <= 720) {
        let arr = number.toString().split('');
        let hun = arr[0];
        let newArr = arr.slice(1);
        if(newArr[0] === '0') { 
            newArr = newArr[1];
            return numbers[hun] + ' hundred ' + numbers[newArr];
        }
        newArr = newArr[0] + newArr[1];
        return numbers[hun] + ' hundred ' + numbers[newArr];
    }

    if(number > 800 && number <= 820) {
        let arr = number.toString().split('');
        let hun = arr[0];
        let newArr = arr.slice(1);
        if(newArr[0] === '0') { 
            newArr = newArr[1];
            return numbers[hun] + ' hundred ' + numbers[newArr];
        }
        newArr = newArr[0] + newArr[1];
        return numbers[hun] + ' hundred ' + numbers[newArr];
    }

    if(number > 900 && number <= 920) {
        let arr = number.toString().split('');
        let hun = arr[0];
        let newArr = arr.slice(1);
        if(newArr[0] === '0') { 
            newArr = newArr[1];
            return numbers[hun] + ' hundred ' + numbers[newArr];
        }
        newArr = newArr[0] + newArr[1];
        return numbers[hun] + ' hundred ' + numbers[newArr];
    }

    if (number > 120) {
        let arr = number.toString().split('');
        let h = numbers[arr[0]];
        let i = ty[arr[1]];
        let x = numbers[arr[2]];
        if(x === 'zero'){
            return h + ' hundred ' + i;
        }
        return h + ' hundred ' + i + ' ' + x;
    }
}
