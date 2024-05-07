import CardUI2 from '@/app/components/CardUI2';
import React from 'react'

const page = () => {
    const exampleData = {
        id: 1,
        title: "Sample Title",
        subTitle: "Sample Subtitle",
        chaptersCount: 10,
        progress: 2,
    };
    const exampleData2 = {
        id: 2,
        title: "Sample Title",
        subTitle: "Sample Subtitle",
        chaptersCount: 10,
        progress: 2,
    };
    const exampleData3 = {
        id: 3,
        title: "Sample Title",
        subTitle: "Sample Subtitle",
        chaptersCount: 10,
        progress: 2,
    };
    return (
        <div className='p-5 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4'>
            <CardUI2
                id={exampleData.id}
                title={exampleData.title}
                subTitle={exampleData.subTitle}
                chaptersCount={exampleData.chaptersCount}
                progress={exampleData.progress}
            />
            <CardUI2
                id={exampleData2.id}
                title={exampleData2.title}
                subTitle={exampleData2.subTitle}
                chaptersCount={exampleData2.chaptersCount}
                progress={exampleData2.progress}
            />
            <CardUI2
                id={exampleData3.id}
                title={exampleData3.title}
                subTitle={exampleData3.subTitle}
                chaptersCount={exampleData3.chaptersCount}
                progress={exampleData3.progress}
            />
        </div>
    )
}

export default page
