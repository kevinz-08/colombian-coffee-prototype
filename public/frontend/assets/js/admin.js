


var coffees = [];
        var editingIndex = -1;

        var sampleCoffees = [
            {
                name: "Coffea Typica",
                region: ["Nariño", "Sierra Nevada"],
                altitude: 1400,
                description: "Suave, delicado, floral, con notas a azúcar morena. Perfil clásico."
            },
            {
                name: "Coffea Caturra",
                region: ["Antioquia", "Caldas", "Nariño"],
                altitude: 1300,
                description: "Sabor balanceado, notas frutales y chocolate. Taza limpia."
            },
            {
                name: "Coffea Bourbon",
                region: ["Huila", "Tolima"],
                altitude: 1400,
                description: "Dulce, cuerpo redondo, notas a frutas rojas, vainilla y florales."
            },
            {
                name: "Coffea Tabi",
                region: ["Santander", "Tolima"],
                altitude: 1300,
                description:"Buen equilibrio, notas dulces, frutales, con toques florales. Es una mezcla genética de Typica, Bourbon y Timor."
            },
            {
                name: "Coffea Maragogipe",
                region: ["Antioquia", "Quindío"],
                altitude: 1200,
                description:"Granos grandes, sabor suave, menos intensidad, notas herbales y florales."
            },
            {
                name: "Coffea Pacamara",
                region: ["Valle del Cauca", "Nariño"],
                altitude: 1300,
                description:"Perfil complejo, afrutado, con cuerpo cremoso, notas a chocolate y especias."
            }
        ];

        function initializeDashboard() {
            coffees = sampleCoffees.slice();
            updateStats();
            displayCoffees();
        }

        function addCoffee() {
            var name = document.getElementById('coffeName').value.trim();
            var region = document.getElementById('coffeeRegion').value;
            var altitude = document.getElementById('coffeeAltitude').value.trim();
            var description = document.getElementById('coffeeDescription').value.trim();

            if (name === '' || region === '' || altitude === '' || description === '') {
                alert('Por favor, completa todos los campos');
                return;
            }

            if (isNaN(altitude) || parseInt(altitude) <= 0) {
                alert('La altitud debe ser un número válido mayor a 0');
                return;
            }

            var newCoffee = {
                name: name,
                region: [region],
                altitude: parseInt(altitude),
                description: description
            };

            coffees.push(newCoffee);

            document.getElementById('coffeName').value = '';
            document.getElementById('coffeeRegion').value = '';
            document.getElementById('coffeeAltitude').value = '';
            document.getElementById('coffeeDescription').value = '';

            updateStats();
            displayCoffees();
            alert('¡Café agregado exitosamente!');
        }

        function displayCoffees(coffeesToShow) {
            var coffeeList = document.getElementById('coffeeList');
            
            if (!coffeesToShow) {
                coffeesToShow = coffees;
            }
            
            if (coffeesToShow.length === 0) {
                coffeeList.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">No hay cafés registrados</p>';
                return;
            }

            var html = '';
            for (var i = 0; i < coffeesToShow.length; i++) {
                var coffee = coffeesToShow[i];
                var originalIndex = i;
                
                if (coffeesToShow !== coffees) {
                    for (var j = 0; j < coffees.length; j++) {
                        if (coffees[j].name === coffee.name && coffees[j].altitude === coffee.altitude) {
                            originalIndex = j;
                            break;
                        }
                    }
                }
                
                var regionText = Array.isArray(coffee.region) ? coffee.region.join(', ') : coffee.region;
                
                html += '<div class="coffee-item">';
                html += '<div class="coffee-info">';
                html += '<h3>' + coffee.name + '</h3>';
                html += '<p><strong>Región:</strong> ' + regionText + '</p>';
                html += '<p><strong>Altitud:</strong> ' + coffee.altitude + ' metros</p>';
                html += '<p><strong>Descripción:</strong> ' + coffee.description + '</p>';
                html += '</div>';
                html += '<div class="coffee-actions">';
                html += '<button class="btn btn-small" onclick="editCoffee(' + originalIndex + ')">Editar</button>';
                html += '<button class="btn btn-danger btn-small" onclick="deleteCoffee(' + originalIndex + ')">Eliminar</button>';
                html += '</div>';
                html += '</div>';
            }
            
            coffeeList.innerHTML = html;
        }

        function editCoffee(index) {
            editingIndex = index;
            var coffee = coffees[index];
            
            document.getElementById('editName').value = coffee.name;
            var regionValue = Array.isArray(coffee.region) ? coffee.region[0] : coffee.region;
            document.getElementById('editRegion').value = regionValue;
            document.getElementById('editAltitude').value = coffee.altitude;
            document.getElementById('editDescription').value = coffee.description;
            
            document.getElementById('editModal').style.display = 'block';
        }

        function saveEdit() {
            var name = document.getElementById('editName').value.trim();
            var region = document.getElementById('editRegion').value;
            var altitude = document.getElementById('editAltitude').value.trim();
            var description = document.getElementById('editDescription').value.trim();

            if (name === '' || region === '' || altitude === '' || description === '') {
                alert('Por favor, completa todos los campos');
                return;
            }

            if (isNaN(altitude) || parseInt(altitude) <= 0) {
                alert('La altitud debe ser un número válido mayor a 0');
                return;
            }

            var existingRegions = Array.isArray(coffees[editingIndex].region) ? coffees[editingIndex].region : [coffees[editingIndex].region];
            if (existingRegions.indexOf(region) === -1) {
                existingRegions.push(region);
            }

            coffees[editingIndex] = {
                name: name,
                region: existingRegions,
                altitude: parseInt(altitude),
                description: description
            };
            
            closeEditModal();
            updateStats();
            displayCoffees();
            alert('¡Café actualizado exitosamente!');
        }

        function closeEditModal() {
            document.getElementById('editModal').style.display = 'none';
            editingIndex = -1;
        }

        function deleteCoffee(index) {
            if (confirm('¿Estás seguro de que quieres eliminar este café?')) {
                coffees.splice(index, 1);
                updateStats();
                displayCoffees();
                alert('Café eliminado exitosamente');
            }
        }

        function searchCoffees() {
            var searchTerm = document.getElementById('searchInput').value.toLowerCase();
            var filteredCoffees = [];
            
            for (var i = 0; i < coffees.length; i++) {
                var coffee = coffees[i];
                if (coffee.name.toLowerCase().indexOf(searchTerm) !== -1 || 
                    coffee.description.toLowerCase().indexOf(searchTerm) !== -1) {
                    filteredCoffees.push(coffee);
                }
            }
            
            displayCoffees(filteredCoffees);
        }

        function filterCoffees() {
            var selectedRegion = document.getElementById('filterRegion').value;
            
            if (selectedRegion === '') {
                displayCoffees();
                return;
            }
            
            var filteredCoffees = [];
            for (var i = 0; i < coffees.length; i++) {
                var coffeeRegions = Array.isArray(coffees[i].region) ? coffees[i].region : [coffees[i].region];
                for (var j = 0; j < coffeeRegions.length; j++) {
                    if (coffeeRegions[j] === selectedRegion) {
                        filteredCoffees.push(coffees[i]);
                        break;
                    }
                }
            }
            
            displayCoffees(filteredCoffees);
        }

        function showAllCoffees() {
            document.getElementById('searchInput').value = '';
            document.getElementById('filterRegion').value = '';
            displayCoffees();
        }

        function updateStats() {
            var totalCoffees = coffees.length;
            var regions = [];
            var totalAltitude = 0;
            
            for (var i = 0; i < coffees.length; i++) {
                var coffeeRegions = Array.isArray(coffees[i].region) ? coffees[i].region : [coffees[i].region];
                for (var j = 0; j < coffeeRegions.length; j++) {
                    if (regions.indexOf(coffeeRegions[j]) === -1) {
                        regions.push(coffeeRegions[j]);
                    }
                }
                totalAltitude += coffees[i].altitude;
            }
            
            var averageAltitude = totalCoffees > 0 ? Math.round(totalAltitude / totalCoffees) : 0;

            document.getElementById('totalCoffees').textContent = totalCoffees;
            document.getElementById('totalRegions').textContent = regions.length;
            document.getElementById('averageAltitude').textContent = averageAltitude + 'm';
        }

        window.onclick = function(event) {
            var modal = document.getElementById('editModal');
            if (event.target === modal) {
                closeEditModal();
            }
        }

        window.onload = function() {
            initializeDashboard();
        }