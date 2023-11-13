export default function Footer()
{
   return(
    <>
        <footer style={footerStyle}>
            <div className="container">
                 <div className="row text-center">
                     <div className="col-md-12 col-lg-12 col-sm-12">
                        <p>&copy; Ramim Ali. All Rights Reserved.</p>       
                    </div>
                </div>
            </div>
       </footer>
    </>
   );
}
const footerStyle = {
    backgroundColor: "rgb(180, 180, 180)",
    color: '#333',
    textAlign: 'center',
    padding: '5px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  };