import CardUI2 from '@/app/components/CardUI2';
import React from 'react'

const page = () => {
    const exampleData = {
        sno: 1,
        title: "Sample Title",
        subTitle: "Sample Subtitle",
        chaptersCount: 10,
        progress: 2,
    };
    return (
        <div className='p-5 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4'>
            <CardUI2
                sno={exampleData.sno}
                title={exampleData.title}
                subTitle={exampleData.subTitle}
                chaptersCount={exampleData.chaptersCount}
                progress={exampleData.progress}
            />
            <CardUI2
                sno={exampleData.sno}
                title={exampleData.title}
                subTitle={exampleData.subTitle}
                chaptersCount={exampleData.chaptersCount}
                progress={exampleData.progress}
            />
            <CardUI2
                sno={exampleData.sno}
                title={exampleData.title}
                subTitle={exampleData.subTitle}
                chaptersCount={exampleData.chaptersCount}
                progress={exampleData.progress}
            />
        </div>
    )
}

export default page
