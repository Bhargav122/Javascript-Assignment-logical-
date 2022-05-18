function fibonacci() {
    var n1 = 1;
    var n2 = 1;
    var count = 0;
    while (count < 100) {
        var n3 = n1 + n2;
        console.log("number is " + n3);
        document.write(n3 + ", ");
        n1 = n2;
        n2 = n3;
        count++;
    }
}