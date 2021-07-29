import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'

const darkTheme = createTheme({
    palette: {
        type: 'dark'
    }
})

function CustomPagination({ setPage, numberOfPages = 10 }) {
    const handleChangePage = (page) => {
        setPage(page)
        window.scroll(0, 0)
    }

    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px"
        }}>
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    color={"primary"}
                    onChange={(e) => handleChangePage(e.target.textContent)}
                    count={numberOfPages}
                    hideNextButton
                    hidePrevButton
                />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
