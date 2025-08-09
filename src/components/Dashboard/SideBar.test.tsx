import React from 'react';
import {render,screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest';
import SideBar from './SideBar'



test("Render a sideBar with with bar options",()=>{
    const dClose=vi.fn()
  
     render(
     <MemoryRouter>
         <SideBar openSidebar={true} setCloseSidebar={dClose} />
     </MemoryRouter>
    );
 
     expect(screen.getByText(/home/i)).toBeInTheDocument();
     expect(screen.getByText(/analytics/i)).toBeInTheDocument();
     expect(screen.getByText(/settings/i)).toBeInTheDocument();
     expect(screen.getByText(/chat/i)).toBeInTheDocument();
     expect(screen.getByText(/dataList/i)).toBeInTheDocument();

})


