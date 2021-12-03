let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let checked = false;
let nameGiven = false;
let emailGiven = false;
    
function submit() {
    if (document.querySelector('input[type="text"]').value.length != 0)
    {
        nameGiven = true;
    }

    if (document.querySelector('input[type="email"]').value.length != 0)
    {
        emailGiven = true;
    }

    for (let i = 0; i<checkboxes.length; i++){
        if(checkboxes[i].checked)
        {
            checked = true;
            break;
        }
    }

    if (checked == true && nameGiven == true && emailGiven == true)
    {
        window.alert("Submission complete");
       
    } 
    else if (checked != true && nameGiven != true && emailGiven != true)
    {
        window.alert("Please enter the necessary information")
    }

    else if (nameGiven != true)
    {
        window.alert("Please enter name");
    }
    else if (emailGiven != true)
    {
        window.alert("Please enter email");
    }
    else if (checked != true)
    {
        window.alert("Please select at least one area to be updated on");   
    }

}