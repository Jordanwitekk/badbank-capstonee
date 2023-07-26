function Home(){
  return (
    <Card
      txtcolor="black"
      header={
        <div style={{ textAlign: 'center', fontSize: '1.3rem' }}>
       Welcome to Bad Bank App!
        </div>
      }
      text={
        <div style={{ textAlign: 'center', fontSize: '1.1rem' }}>
          The All-New online banking experience!
        </div>
      }
      body={(<img src="bank.png" className="img-fluid"  alt="Responsive image"/>)}
  
    />
  );  
}
