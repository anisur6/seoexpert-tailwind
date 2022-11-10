import React from 'react';

const Guide = () => {
    return (
        <>
        <div className='p-4 lg:px-20 lg:py-20'>
            <div className='flex justify-center mb-10 lg:items-center'> 
                <p className='text-2xl font-bold '>Free Keyword Tool</p>
                 <span className='text-4xl font-bold px-5 hidden lg:block'>||</span>
                    <img
                        className="h-8 w-auto sm:h-10"
                        src="https://cdn-icons-png.flaticon.com/512/564/564419.png"
                        alt=""
                    />
                    <p className="ml-10 text-2xl pl-5 sr-only font-bold text-sky-600 md:not-sr-only ">SEOEXPERT</p>
            </div> 

            <div className='grid gap-y-5'>

                <div className=''>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>We’ve revamped our popular Free Keyword Tool and it’s better than ever, with more features, more data, and exclusive info to help you manage, optimize, and expand your search marketing campaigns.Keyword research can be a slog, but WordStream’s Free Keyword Tool makes it fast and easy to find the keywords your business needs to drive traffic through organic and paid search.
                    Want to know more about WordStream’s new and improved Free Keyword Tool? Then keep reading!</p>
                </div>

                <div className=''>
                    <p className='text-normal lg:text-2xl font-semibold leading-relaxed'>Why use WordStream’s Free Keyword Tool for keyword research?</p>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>Keyword research is one of the first – and most crucial – steps in any search marketing campaign, organic or paid.  But most free keyword suggestion tools offer limited results and limited utility, especially when it comes to keyword research for PPC.
                    To drive search engine traffic, whether through organic search or paid search advertisements, you need the right keywords, plus a process to expand your keyword lists over time. That’s where our free tool comes in.</p> <br/>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>WordStream’s Free Keyword Tool gives you hundreds of relevant keyword results, plus additional, actionable information like competition level and estimated CPC, all for free!  It’s an awesome alternative to Google’s Keyword Planner.</p>
                </div>


                <div className=''>
                    <p className='text-normal lg:text-2xl font-semibold leading-relaxed'>How does the Free Keyword Tool work?</p>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>Just enter a keyword and then choose your industry and country (if desired). You’ll get a list of related keyword suggestions, including long-tail keyword variations, as well as their search volume on Google and Bing.
                        You can also enter a website URL – such as a competitor’s homepage – to get contextual keyword suggestions and ideas to help you compete against similar businesses.</p><br/>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>We’ll show you the top 25 keywords right away. To get the full list of keywords, just enter your email address, and we’ll send you the full keyword list by email for free.</p>
                </div>
                
                <div className=''>
                    <p className='text-normal lg:text-2xl font-semibold leading-relaxed'>What are the Free Keyword Tool’s unique features?</p>
                    <p className='tlg:text-lg text-smfont-light leading-relaxed'>You don’t just want keywords – you want competitive, industry-specific information  and keyword analysis features that help you prioritize and make the most of your marketing budget.</p><br/>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>Our free Bing and Google keyword tool is specifically designed to arm paid search marketers with better, more complete keyword information to inform their PPC campaigns, including competition and cost data, tailored to your country and industry, so you know your keyword list is super-relevant to your specific business.Once you’ve got your keyword list, download it as a CSV file to make it super-easy to upload directly into your Google Ads or Bing Ads account. Put your keywords to work!</p>
                </div>


                <div className=''>
                    <p className='text-normal lg:text-2xl font-semibold leading-relaxed'>Keyword Data Sources for The Free Keyword Tool</p>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>The Free Keyword Tool’s keyword and keyword search volume data is sourced through the Google and Bing keyword research API.</p>
                </div>


                <div className=''>
                    <p className='text-normal lg:text-2xl font-semibold leading-relaxed'>Filtering Free Keyword Results by Industry</p>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>With WordStream’s Free Keyword Tool you also have the option to filter your results by industry, which specifies your results and other data including search volume, competition level and estimated CPC so they’re all maximally relevant to your industry.</p><br/>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>For example, if you search for keywords related to “cars” while selecting “Arts & Entertainment” as the industry, you’ll see results like “cars movie,” “disney cars,” and “pixar cars.” However, if you input the same term and change the industry to “Finance & Banking,” you’ll see results like “new car incentives” and “new car lease.”</p><br/>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>You can filter your results by 24 business verticals, including Apparel, Arts & Entertainment, Autos & Vehicles, Beauty & Fitness, Books & Literature, Business & Industrial, Computers & Electronics, Finance & Banking, Food & Drink, Toys & Games, Health, Hobbies & Leisure, Home & Garden, Internet & Telecom, Jobs & Education, Law & Government, News Media & Publications, Family & Community, Occasions & Gifts, Pets & Animals, Real Estate, Retail & General, Sports & Fitness, and Travel & Tourism.</p>
                </div>

                <div className=''>
                    <p className='text-normal lg:text-2xl font-semibold leading-relaxed'>Location Based and International Keyword Data</p>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>You can filter your keyword results and volume/performance data geographically – choose between more than 23 countries including Australia, Austria, Belgium, Brazil, Canada, Czech Republic, Denmark, France, Germany, India, Italy, Japan, Mexico, Netherlands, Norway, Poland, Russia, Spain, Sweden, Switzerland, Turkey, United Kingdom or United States.</p><br/>
                    <p className='lg:text-lg text-sm font-light leading-relaxed'>Are you a United States-based advertiser looking for location-specific keywords for a local campaign? Simply enter the name of your state and get keyword results specifically catered to your region.</p>
                </div>


            </div>
        </div>  
        </>
    );
};

export default Guide;