let current_id = 0;
let testimonials_array = document.getElementsByClassName("testimonial");

let leftarrows = document.getElementsByClassName("left-arrow");
let rightarrows = document.getElementsByClassName("right-arrow");

for(let i = 0; i < leftarrows.length; i++)
{
    leftarrows[i].addEventListener("click", function()
    {
        for(let y = 0; y < testimonials_array.length; y++)
        {
            testimonials_array[y].style.display = "none";
        }

        if(current_id == 0)           
            current_id = testimonials_array.length-1;                        
 
        else current_id--;

        testimonials_array[current_id].style.display = "flex";
    });
};

for(let i = 0; i < rightarrows.length; i++)
{
    rightarrows[i].addEventListener("click", function()
    {
        for(let y = 0; y < testimonials_array.length; y++)
        {
            testimonials_array[y].style.display = "none";          
        }

        if(current_id == testimonials_array.length-1)         
            current_id = 0;                        
 
        else current_id++;

        testimonials_array[current_id].style.display = "flex";
    });
};

