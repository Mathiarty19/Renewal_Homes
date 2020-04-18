import React from 'react';

function About(props) {
    return (
        <div className="container">
                <h1 className="p-heading1">About Us</h1>
            <div className="row">
                <div className="col">
                    <p>Renewal Homes buys, sells and rents homes. 
                    We are focused on improving neighborhoods and redeveloping areas that we work in. 
                    We invest in quality materials, superior craftsmanship and attractive design to create homes that stand out in our community.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img className="float-left mr-3 mb-3 img-thumbnail" width="150" height="150" src='https://picsum.photos/350' alt="Bio"></img>
                    <p>Together since high school, Charlie and Joni Jacobson have been partners in business, life and love for more than 30 years. 
                    They have 3 children; Charlie, Alex & Brooke.  
                    They bought their first home around 1990 in Maple Grove, MN. 
                    Today they live in Springfield MO.
                    Renewal Homes represents their commitment to family and community.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Charlie is a licensed home builder and general contractor for Renewal Homes. 
                    In addition to business owner, he has over 20 years of experience managing the facilities for an international company in MN.  
                    Charlie has been an active board member and volunteer for many organizations including Habitat for Humanity, United Way and the Chamber of Commerce.</p>
                    <p>Joni is CEO at Salon Service Group, with headquarters in Springfield, MO. 
                    Prior to SSG, Joni worked in Minneapolis and Toronto in the HQ of the largest salon companies in the world. 
                    She brings the style and design to Renewal Homes that buyers demand.</p>
                </div>
            </div>
        </div>
    );
}

export default About