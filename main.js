const myForm = document.querySelector('#my-form');
const employeeIdInput = document.getElementById('employeeId');
const employeeNameInput = document.getElementById('employeeName');
const employeeDateOfBirthInput = document.getElementById('employeeDateOfBirth');
const departmentInput = document.getElementById('department');
const managerInput = document.getElementById('manager');
const msg = document.querySelector('.msg');
myForm.addEventListener('submit', onSubmit);
const employeeList = document.getElementById('employeeList');
function onSubmit(e)
{
    e.preventDefault();
    if(employeeIdInput.value === '' || employeeNameInput.value === '' || employeeDateOfBirthInput === ''  || departmentInput === '' ||  managerInput === '')
    {
        msg.classList.add('error');     //Associate our .css error class with the msg const
        msg.innerHTML = 'Please enter a value for all fields.';
        //Remove the message after 3 seconds
        setTimeout(() => 
		        {
		            msg.innerHTML = '';
		            msg.classList.remove('error');
		        }, 3000);   //Remove msg after 3 seconds

    }
    else
    {
        //Add the employee to the list
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(employeeNameInput.value));
        employeeList.appendChild(li);

        //Create the success message
        var messageArray = ['New Employee Information for ', employeeNameInput.value, ', ID ', employeeIdInput.value, ' accepted.'];

        //Send the success message
         msg.classList.add('info');     //Associate our .info class with the message
        //Remove the message after 3 seconds
		        msg.innerHTML = messageArray.join("");
		        setTimeout(() => 
		        {
		            msg.innerHTML = '';
		            msg.classList.remove('info');
		        }, 3000);   //Remove msg after 3 seconds

        //Clear the fields for the next entry
        employeeIdInput.value = '';
        employeeNameInput.value = '';
        employeeDateOfBirthInput.value = '';
        departmentInput.value = '';
        managerInput.value = '';
    }
   
}

