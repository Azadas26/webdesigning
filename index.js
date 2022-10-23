$(document).ready(function()
{   
   
    $("#form").validate(
        {
            rules:
            {
                first:{
                    required:true,
                    minlength:4
                },
                second:
                {
                    required:true,
                    minlength:4
                },
                choo:
                {
                    required:true
                },
                radio:
                {
                    required:true
                }
            },
            messages:
            {
                first:
                {
                    required:"Must needed"
                }
            }
        }
    )
    
})