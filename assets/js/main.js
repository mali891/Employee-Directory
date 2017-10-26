$(document).ready(function() {
    var $employeeContainer = $('.employee-container'),
        $modal = $('#modal1'),
        htmlString = '',
        counter = 0,
        telNumbers = [],
        addresses= [],
        birthdays = [],
        clicked;

    $('#modal1').modal();

    $.ajax({
        url: 'https://randomuser.me/api/?results=12&?nat=en&?inc=name,location,email,dob,phone,picture',
        dataType: 'json',
        error: function() {
            console.log('something didnt work');
        },
        success: function(data) {
            $.each(data, function(i,v) {
                for(var i = 0; i < data.results.length; i++) {
                    counter++;
                    if(counter < 13) {
                        telNumbers.push(data.results[i].phone);
                        addresses.push(data.results[i].location);
                        birthdays.push(data.results[i].dob);
                        htmlString += '<div class="col s12 m4"><a href="#modal1" data-target="modal1" class="employee-link modal-trigger"><div class="employee-container"><div class="employee-img">';
                        htmlString += '<img src="' + data.results[i].picture.large + '" alt="" class="circle responsive-img"></div>';
                        htmlString += '<div class="employee-details"><h3 class="name">' + data.results[i].name.first + ' '  + data.results[i].name.last +  '</h3>';
                        htmlString += '<p class="email">' + data.results[i].email + '</p>';
                        htmlString += '<p class="city">' + data.results[i].location.city + '</p>';
                        htmlString += '<p class="link">View <span class="capitalise">'+ data.results[i].name.first + '\'s</span> details</p>';
                        htmlString += '</div></div></a></div>';
                    }
                }
            });//End $.each

            $('.employee-entry').html(htmlString);

            for(var i = 0; i < birthdays.length; i++) {
                birthdays[i] = birthdays[i].split(' ')[0];
                birthdays[i] = birthdays[i].split('-');
                birthdays[i][0] = birthdays[i][0].substr(2, 3);
                birthdays[i] = birthdays[i][2] + '/' + birthdays[i][1] + '/' + birthdays[i][0];
            }

            $('.employee-container').click(function() {
                clicked = $('.employee-container').index(this);

                var imgSrc = $(this).find('img').attr('src'),
                    name = $(this).find('h3.name').text(),
                    email = $(this).find('p.email').text();

                $modal.find('img').attr('src', imgSrc);
                $modal.find('h3.name').text(name);
                $modal.find('p.email').text(email);
                $modal.find('p.city').text(addresses[clicked].city);
                $modal.find('p.tel').text(telNumbers[clicked]);
                $modal.find('p.address').text(addresses[clicked].street + ', ' + addresses[clicked].state + ' ' + addresses[clicked].postcode);
                $modal.find('p.birthday').text('Birthday: ' + birthdays[clicked]);
            });
        }
    });//End AJAX call

}); //End DOM Ready
