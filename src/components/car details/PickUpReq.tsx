import React from 'react'

const PickUpReq = () => {
  return (
    <div className=' mx-sm-auto'>
      <h3 className="subtitle">Required at pick-up</h3>
      <p className='w-75 para'>
        At pick-up, the main driver will need a physical payment card (in their
        own name) with €700 available for the deposit.
      </p>
      <div className="card-accepted d-flex flex-row gap-4">
        <div className='d-flex flex-column gap-2'>
          <span className="text-success para">Accepted</span>
          <span className='para'>Credit cards</span>
        </div>
        
        <div className='d-flex flex-column gap-2'>
          <span className="red para">Not accepted</span>
          <span className='para'>Debit cards</span>
          <span className='para'>Cash</span>
          <span className='para'>Virtual/digital cards</span>
        </div>
      </div>
    </div>
  );
}

export default PickUpReq