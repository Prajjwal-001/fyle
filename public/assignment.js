document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("contactModal");
    var btn = document.getElementById("contactButton");
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("contactForm");

    btn.onclick = function() {
        modal.style.display = "flex";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    form.onsubmit = async function(event) {
        event.preventDefault();
        var formData = new FormData(form);
        var jsonData = {};
        formData.forEach((value, key) => jsonData[key] = value);

        try {
            let response = await fetch('/api/form-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                modal.style.display = "none";
            } else {
                alert('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form');
        }
    }

    $(document).ready(function(){
        $('.carousel').carousel({
            interval: 2000
        });
    
        $('.carousel-item').hover(
            function() {
                $(this).find('.carousel-text-box').show();
            },
            function() {
                $(this).find('.carousel-text-box').hide();
            }
        );
    });
    
    const projectItems = document.querySelectorAll('.project-item');
    const projectImage = document.getElementById('project-image');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const newImageSrc = item.getAttribute('data-image');
            projectImage.setAttribute('src', newImageSrc);
        });
    });
});