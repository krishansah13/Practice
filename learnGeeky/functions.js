
const obj = {
    regularMethod : function() {
        console.log(this);
    },
    arrowMetod : () => {
        console.log(this);
    }
};
obj.regularMethod();
obj.arrowMetod(); 