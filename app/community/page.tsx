"use client"

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { RiSendPlaneFill } from "react-icons/ri";
import { useSession, UserButton } from '@clerk/nextjs';
import { z } from 'zod';
import { createTweetSchema } from '../schemas/validationSchema';
import axios from 'axios';


type UserForm = z.infer<typeof createTweetSchema>

function Community() {
    const [tweet, setTweet] = useState('');
    const [error, setError] = useState('');
    const [tweets, setTweets] = useState([]);
    const { session } = useSession();

    const handlePost = async () => {
        try {
            const formattedTweetData: UserForm = createTweetSchema.parse({
                tweet: tweet,
                email: session?.user.primaryEmailAddress?.emailAddress,
            });
            const response = await axios.post('/api/tweet', formattedTweetData);
            setTweet('');

        } catch (error) {
            setError("An error occurred while posting the tweet");
        }
    };

    const fetchTweets = async () => {
        try {
            const response = await axios.get('/api/tweet');
            setTweets(response.data);
            console.log(tweets);
        } catch (error) {
            console.error("Error fetching tweets:", error);
        }
    };

    useEffect(() => {
        fetchTweets();
    }, []);



    return (
        <div className='bg-[#E9EBE7]'>
            <div className='flex justify-center items-center '>
                <div className=" mx-80 mt-3 flex flex-col  items-start font-display  bg-[#28332E] min-h-[25vh] w-2/4  border border-black rounded-[2rem]  pt-8 pl-12 pr-12    text-white  ">

                    <div >
                        <h1 className='text-3xl font-black whitespace-pre-line'>
                            Welcome to the trading
                            Community
                        </h1>


                        <div className='  flex items-center justify-between space-x-6 w-full mt-10 '>
                            <p>Connect, Clear and Ask your peer trades...</p>
                            <div className='flex justify-end'>
                                <button className='bg-[#60A289] py-[0.5em] px-6 rounded-lg text-white'>
                                    Doubt? Ask here
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className='border border-[#ACACAC] rounded-[2rem] p-5 h-30 mx-80 mt-5  '>
                <div className='flex justify-between'>
                    <div className='flex space-x-2'>
                        <div className=''><UserButton /></div>

                        {session && (
                            <div className='flex flex-col justify-start'>
                                <h1 className='text-black font-bold'>{session?.user.fullName}</h1>
                                <h1 className='text-[#8D8D8D]'>{session.user.primaryEmailAddress?.emailAddress}</h1>
                            </div>
                        )} {!session && (
                            <div className='flex flex-col justify-start'>
                                <h1 className='text-black font-bold'>username</h1>
                                <h1 className='text-[#8D8D8D]'>@email</h1>
                            </div>
                        )}


                    </div>
                    <button className='rounded-md text-white bg-[#60A289] border border-[#8DCEC1] px-6 my-1 ' onClick={handlePost}>Post</button>
                </div>
                <div className=' bg-white rounded-sm mt-5 '>
                    <textarea placeholder='Type anything here...' className='text-[#444444]  border text-sm w-full h-14 rounded-xl overflow-y-auto' onChange={e => setTweet(e.target.value)}></textarea>
                    <div className='flex justify-end'>
                        <RiSendPlaneFill size={25} />
                    </div>
                </div>
            </div>


            {tweets.length > 0 ? (
                <>
                    {tweets.map((tweet, index) => (
                        <div key={index} className='border border-[#ACACAC] rounded-[2rem] p-5 h-30 mt-5 mx-80'>
                            <div className='flex justify-between'>
                                <div className='flex space-x-2'>
                                    <div className='flex flex-col justify-start'>
                                        {/* <h1 className='text-black font-bold'>{tweet.username}</h1> */}
                                        <h1 className='text-[#8D8D8D]'>{tweet.authorEmail}</h1>
                                    </div>
                                    <div className='mt-5 w-5/6'>
                                        <p>{tweet.tweet}</p>
                                    </div>
                                    <div className='flex mt-5'>
                                        <FontAwesomeIcon icon={faComment} className='mr-2' />
                                        {/* <span className='mr-8'>{tweet.comments}</span> */}
                                        <FontAwesomeIcon icon={faRocket} className='mr-2' />
                                        <span className='mr-8'>{tweet.likes}</span>
                                        <FontAwesomeIcon icon={faShare} className='flex ml-auto' />
                                        <button className='rounded-md px-6 my-1 text-black '>...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className='flex flex-col justify-start'>
                    no tweets
                </div>
            )}
        </div>
    )
} export default Community;
