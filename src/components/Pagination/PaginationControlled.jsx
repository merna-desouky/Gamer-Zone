import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({
    totalPosts,
    postsPerPage,
    currentPage,
    setCurrentPage,
}) {
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Stack spacing={2}>
            <Pagination
                sx={{
                    '& .MuiPaginationItem-root': { color: 'red' },
                    '& .Mui-selected': {
                        backgroundColor: '#1e2a33',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#1e2a33',
                        },
                    },
                }}
                count={Math.ceil(totalPosts / postsPerPage)}
                page={currentPage}
                onChange={handleChange}
            />
        </Stack>
    );
}
