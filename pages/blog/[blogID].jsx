import React from 'react';
import {useRouter} from 'next/router';

const Blog = () => {
    const router = useRouter();
    const {blogID} = router.query;
    return (
        <div>
            <p>blog id: {blogID}</p>
        </div>
    );
};

export default Blog;