export default function () {
    this.init = function () {
        console.log('initializing Klassiker.js... Please wait.');
        setTimeout(function () {
            console.log('Klassiker.js initialized.');
        }, 3000);
    }
}
