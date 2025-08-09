import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest';
import SideBar from './SideBar'



test("Render a sideBar with with bar options", () => {
    const dClose = vi.fn()

    render(
        <MemoryRouter >
            <SideBar openSidebar={true} setCloseSidebar={dClose} />
        </MemoryRouter>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/analytics/i)).toBeInTheDocument();
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
    expect(screen.getByText(/chat/i)).toBeInTheDocument();
    expect(screen.getByText(/dataList/i)).toBeInTheDocument();

})

test("Check for click on the sidebar options", () => {
    //Arrange
    const dClose = vi.fn()
    render(
        <MemoryRouter initialEntries={['/']}>
            
            <SideBar openSidebar={true} setCloseSidebar={dClose} />
        </MemoryRouter>
    );

    // now to get the link tag for home
    const homeLink = screen.getByText(/home/i);
    const analyticsLink=screen.getByText(/analytics/i);
    //Act
    fireEvent.click(homeLink)
    expect(homeLink.getAttribute('href')).toBe('/');
    fireEvent.click(analyticsLink)
    expect(analyticsLink.getAttribute('href')).toBe('/analytics');
    //Assert


})
