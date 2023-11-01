import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown } from "react-bootstrap";

class MenuListe extends React.Component{
    myMenuList={
        myMenuArray:["Frühling","Sommer","Herbst","Halloween","Winter"]
    }
    render() {
        return(
            <div>            
                <DropdownButton variant="secondary" title="Wizard-Mode">
                    {this.myMenuList.myMenuArray.map(data=>(
                    <Dropdown.Item title="{data}">{data}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </div>
        );
    }
}

export default MenuListe;