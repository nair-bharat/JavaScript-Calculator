function add()
    {
        var my_input1 = document.getElementById('op').value;
        var my_input2 = document.getElementById('op').value;

        var sum = parseInt(my_input1) + parseInt(my_input2);
        document.write(sum);
    }