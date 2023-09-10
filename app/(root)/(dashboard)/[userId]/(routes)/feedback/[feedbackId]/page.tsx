
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const page = () => {
    return (
        <div className='container flex flex-col gap-11'>
            <div className='mt-3 p-1 bg-gray-300 rounded-sm'>
                News title
            </div>
            <div>
                <Label htmlFor='feedback Desc'>Description</Label>
                <div id='feedback Desc' className='bg-slate-200 p-1 rounded-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore consequuntur repellendus rem. Corrupti iusto distinctio earum, vel eum nihil esse hic dicta sunt suscipit et tenetur ratione, omnis nisi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quam sunt ab pariatur, omnis molestiae quas alias quae esse facilis adipisci odio fugiat voluptates at odit. Temporibus nulla ipsa tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis, adipisci voluptatibus culpa similique sapiente, itaque tempora dignissimos magni explicabo optio temporibus quam suscipit exercitationem! Nisi totam ducimus reprehenderit labore.
                </div>
            </div>
            <Separator />
            <div className='flex flex-row justify-between'>
                <div className='flex gap-1'>
                    <label htmlFor='score1'>Polarity score</label>
                    <span
                        className="whitespace-nowrap rounded-full bg-slate-300 px-2.5 py-0.5 text-sm text-gray-700"
                    >
                        98
                    </span>
                </div>
                <div className='flex gap-1'>
                    <label htmlFor='score1'>Sentiment score</label>
                    {/* <p id='score1' className='text-sm'> Score</p> */}
                    {/* <Badge variant="secondary">Score</Badge> */}
                    <span
                        className="whitespace-nowrap rounded-full bg-slate-300 px-2.5 py-0.5 text-sm text-gray-700"
                    >
                        98
                    </span>
                </div>
                <span className='bg-gray-300 rounded-md'>
                    Proress
                </span>
            </div>
                {/* </> */}
            <div>
                <label htmlFor="link" className='mx-1'>link</label>
                <a href="" id='link' target='_blank'><Badge variant={"destructive"}>https://youtube.com</Badge></a>
            </div>
            
        </div>
    )
}

export default page
