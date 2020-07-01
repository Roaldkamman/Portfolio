// URL GRABS ONLY US VARIABLES
const APIurl = 'https://randomuser.me/api/?results=12&nat=us&inc=name,location,email,dob,phone,picture&noinfo';

// SELECTORS
const grid = document.querySelector('.grid-container');
const searchInput = document.querySelector('.search');

// FUNCTION MAPS DATA AND ASSIGNS IT TO SELECTOS MAKING THEM EASIER TO ACCESS. 
function mapData(data) {
    const completeData = data.map((employee => {
        const fName = employee.name.first;
        const lName = employee.name.last;
        const birth = employee.dob.date;
        const email = employee.email;
        const phone = employee.phone; 
        const image = employee.picture.large;
        const country = employee.location.country;
        const state = employee.location.state;
        const locationCity = employee.location.city;
        const locationNumber = employee.location.street.number;
        const locationStreet = employee.location.street.name;
        const locationZip = employee.location.postcode;

        const setData = {
            name: `${fName} ${lName}`,
            email,
            locationCity,
            image,
            phone,
            birthday:`${birth.substring(5,7)}/${birth.substring(8,10)}/${birth.substring(2,4)}`,
            address: `${locationNumber} ${locationStreet} ${state} ${locationZip} ${country}`,
        };
        return setData;
    }));
    return completeData;
}

// ASYNC FUNCTION PARSES URL THROUGH JSON
async function getEmployees(url) {
    const getEmployees = await fetch(url);
    const toJson = await getEmployees.json();
    const employeeData = toJson.results.map(data =>{
        const employee = data;
        return employee;
    });
    return employeeData;
}

// FUNCTION THAT BUILDS HTML DATA FROM MAPDATA FUNCTION
function generateHTML(data) {
    grid.innerHTML = "";
    const HTML = data.map(employee => {
        const employeeContainter = document.createElement("section");
        employeeContainter.classList.add("grid-item");
        grid.append(employeeContainter);
        employeeContainter.innerHTML = `
         <div class="employee-card popup">
            <img src="${employee.image}" alt="profile picture of ${employee.name}" class="profile-image popup">
            <div class="popup">
              <h2 class="employee-name popup">${employee.name}</h2>
              <p class="employee-email popup">${employee.email}</p>
              <p class="locationCity popup">${employee.locationCity}</p>
            </div>
         </div>
           <div class="overlay">
             <p class="previous-item"><</p>
             <div class="overlay-card">
               <p class="close">X</p>
               <div>
                 <img src="${employee.image}" alt="profile picture of ${employee.name}" class="profile-image"">
                 <h2 class="employee-name-overlay">${employee.name}</h2>
                 <p class="employee-email">${employee.email}</p>
                 <p class="locationCity">${employee.locationCity}</p>
                 <hr class="overlay-hr">
                 <p class="employee-phone">${employee.phone}</p>
                 <p class="employee-address">${employee.address}</p>
                 <p class="employee-birthday">BirthDay:${employee.birthday}</p>
               </div>
             </div>
             <p class="next-item">></p>
           </div>
        `;
        return employeeContainter;
    });
    return HTML;
}

// RUNS ASYNC FUNTION AND BUILDS THE HTML DISPLAY WITH MAPDATA AND GENERATEHTML FUNCTIONS
getEmployees(APIurl)
 .then(mapData)
 .then(data => {
    generateHTML(data);
    
    // EVENT LISTENERS PLACED INSIDE GETEMPLOYEES FUNCTION TO PREVENT PROBLEMS WITH GENERATED CONTENT NOT EXISTING WHEN LISTENER IS ADDED
    searchInput.addEventListener("keyup",function(e) {
      // THIS FUNCTION FILTERS THROUGH EXISTING GENERATED PROFILES AND DISPLAYS THOSE THAT MATCH THE SEARCH
        const currentValue = searchInput.value.toLowerCase();
        if (currentValue !== "") {
          let searched = [];
          for (let i = 0; i < data.length; i += 1){
            if (data[i].name.toLowerCase().indexOf(currentValue) > -1){
               searched.push(data[i]);
            }
         } generateHTML(searched);

        } else {
          generateHTML(data);
        }
      });
      
      grid.addEventListener("click", function(e) {
        if (e.target.classList.contains("close")) {
          e.target.parentNode.parentNode.style.visibility = "hidden";
        }

        if (e.target.classList.contains("popup")) {
          if (e.target.classList.contains("employee-card")) {
            e.target.nextElementSibling.style.visibility = "visible";
          }
          if (e.target.closest(".employee-card")) {
            e.target.closest(".employee-card").nextElementSibling.style.visibility = "visible";
          }
        }
        
        // COMPLEX DOM TRAVERSING NAVIGATION THROUGH GENERATED CONTENT. 
        if (e.target.classList.contains("next-item")) {
          const target = e.target;
          const targetParent = target.parentNode;
          const targetSection = targetParent.parentNode;
          const nextSection = targetSection.nextElementSibling;
          if (nextSection) {
            const nextOverlay = nextSection.children[1];
            targetParent.style.visibility = "hidden";
            nextOverlay.style.visibility = "visible";
          }
        } 

        if (e.target.classList.contains("previous-item")) {
          const target = e.target;
          const targetParent = target.parentNode;
          const targetSection = targetParent.parentNode;
          const previousSection = targetSection.previousElementSibling;
          if(previousSection) {
            const previousOverlay = previousSection.children[1];
            targetParent.style.visibility = "hidden";
            previousOverlay.style.visibility = "visible";
          }
        }
      })

      
})
// CATCHES POSSIBLE ERRORS AND LOGS THEM
.catch(err => console.log("an error occurred",err));