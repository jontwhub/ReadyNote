import React from 'react'

const Nav = ({onQueued}) => {
    
    return (
        <div className="wrapper">
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Jonathan's Ready Note</h3>
            </div>
  
            <ul style={{listStyleType:'none'}}>
                <p style={{marginLeft:'-40px'}}>KeyWords</p>
                <hr style={{backgroundColor:'#bebebe',marginLeft:'-40px'}} />
               
                <li>
                    <a onClick={() => onQueued('monthly')} href="#">Monthly</a>
                </li>
                
                <li>
                <a onClick={() => onQueued('partial')} href="#">Partial</a>
                </li>
                <li>
                <a onClick={() => onQueued('voicemail')} href="#">Voicemail</a>
                </li>
                <li>
                <a onClick={() => onQueued('ppa')} href="#">PPA</a>
                </li>
                <li>
                <a onClick={() => onQueued('deductible')} href="#">Deductible</a>
                </li>
                <li>
                <a onClick={() => onQueued('copay')} href="#">Copay</a>
                </li>
                <li>
                <a onClick={() => onQueued('paid')} href="#">Paid</a>
                </li>
                <li>
                <a onClick={() => onQueued('insurance')} href="#">Insurance</a>
                </li>
                <li>
                <a onClick={() => onQueued('cca')} href="#">CCA</a>
                </li>
                <li>
                <a onClick={() => onQueued('already')} href="#">Already Paid</a>
                </li>
            </ul>
  
           
        </nav>
        </div>
    )
}

export default Nav
