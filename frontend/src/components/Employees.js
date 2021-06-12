import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function Employees() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('/employees'); //where the data comes from
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            
            <div class="container-fluid">
                <h1 class="mt-5">Employees</h1>
                <form method="POST" action="/addEmployee">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="firstname" class="form-control" />
                            <input type="text" name="lastname" class="form-control" />
                            <input type="text" name="email" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i>{item.firstname} {item.lastname}, {item.email} {item.status.name}</i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
    );
}

export default Employees;