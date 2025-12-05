import PharmaDemo from "../../../assets/imgs/services-details-2/PharmaDashboard/PharmaDemo.mp4";
import BlogSidebar from '../../BlogSidebar/BlogSidebar';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import FlipImgwithContent from '../../ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/services-details/icon-1.svg';
import icon2 from '../../../assets/imgs/services-details/icon-2.svg';
import icon3 from '../../../assets/imgs/services-details/icon-3.svg';
import icon4 from '../../../assets/imgs/services-details/icon-4.svg';
import icon5 from '../../../assets/imgs/services-details/icon-5.svg';

import PhaseItems from '../../ui/PhaseItems/PhaseItems';
import img1 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-1.png';
import img2 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-2.png';
import img3 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-3.png';
import img5 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-5.png';
import img6 from '../../../assets/imgs/services-details-2/PharmaDashboard/img-6.png';
import AgentforcePara from "../../ui/AgentforcePara/AgentforcePara";
import FlipImgwithContentAgentforce from "./FlipImgwithContentAgentforce";

function AgentforceImplementation_First() {

    const items = [
        {
            icon: icon1,
            title: "Step 1: Enable Einstein Generative AI in Salesforce",
            description:
                "Agentforce runs on Einstein's generative AI capabilities. From Setup, search for Einstein Setup and toggle on Einstein Generative AI."
        },
        {
            icon: icon2,
            title: "Step 2: Enable Agentforce",
            description:
                "Still in Setup, search for Agentforce Agents and flip the switch to enable Agentforce. This unlocks the tools you’ll use to design and manage your AI-powered agents."
        }, 
        {
            icon: icon2,
            title: "Step 3: Go to Agentforce Agents to Create Your First Agent",
            description:
                "In the Setup menu, search for Agentforce Agents. This is your central hub for creating new agents and managing existing ones."
        },{
            icon: icon2,
            title: "Step 4: Create a New Agent",
            description:
                "Click + New Agent. You'll be prompted to select a starting template."
        },{
            icon: icon2,
            title: "Step 5: Choose a Template",
            description:
                "Salesforce provides out-of-the-box templates like the Agentforce Service Agent. Templates give you a solid foundation, so you can focus on tailoring the agent to your business needs rather than starting from scratch."
        },{
            icon: icon2,
            title: "Step 6: Open the Agent Builder",
            description:
                "Once the agent is created, click into the Agent Builder. Think of it as your design studio—this is where you configure how the agent listens, understands, and responds."
        },{
            icon: icon2,
            title: "Step 7: Define Topics",
            description:
                "Topics represent the kinds of requests your customers might have, like Order Status, Billing Questions, or Returns. Defining clear topics helps guide conversations and keeps your agent organized."
        },{
            icon: icon2,
            title: "Step 8: Add Actions to Topics",
            description:
                "Topics represent the kinds of requests your customers might have, like Order Status, Billing Questions, or Returns. Defining clear topics helps guide conversations and keeps your agent organized."
        },{
            icon: icon5,
            title: "Step 9: Ground Your Agent in Data (Optional but Powerful)",
            description:
                "Whether deploying Prediction Builder at scale or integrating custom LLMs into Experience or Industries Cloud, your solution is robust and future-proof."
        },
    ]

    return (
        <>
            <div className="container">
                <div className="row pt-8">
                    {/* left container  */}
                    <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">
                        {/* <video
                            className="rounded-3"
                            src="blob:https://www.youtube.com/3d1e0d0d-1462-47eb-8a9f-15d01e097992"
                            style={{ width: "100%", height: "auto" }}
                        /> */}

                        <video
                            tabIndex={-1}
                            aria-hidden="true"
                            className="video-stream html5-main-video"
                            playsInline
                            controlsList="nodownload"
                            style={{ width: "724px", height: "407px", left: "0px", top: "46px" }}
                            src="blob:https://www.youtube.com/3d1e0d0d-1462-47eb-8a9f-15d01e097992"
                        />

                        <HeadingContent
                            title="Agentforce at Work : Streamlining Sales Process Every Step of the Way"
                            content={
                                <>
                                    <p>Implementing Agentforce in Salesforce is transforming how sales teams work by combining AI, automation, and CRM data into one intelligent assistant. Instead of spending hours on repetitive tasks like quote creation, margin calculations, or comparing deals, sales reps can now instruct Agentforce to handle these tasks instantly.<b className="text-black"> AI, automation, and CRM data into one intelligent assistant</b>.This article explores real-world Agentforce use cases for sales teams, based on business requirements and user stories, to show how AI can simplify quoting, improve accuracy, and enhance productivity.</p>
                                </>
                            }
                        />
                           <div className='border-bottom pb-3'></div>
                        {/* next section  */}
                        <AgentforcePara/>

                         {/* filp img and content */}
                        <FlipImgwithContentAgentforce items={items}/>

                        {/* next section  */}
                        {/* <PhaseItems items={[
                            ["Smart Inventory Forecasting", "Predictive Sales Analysis"],
                            ["Compliance Intelligence", "Automated Reporting & Analytics"],
                            ["AI-Driven Decision Support", "Strategic AI Roadmapping"],
                        ]} /> */}

                        {/* next section */}
                        {/* <HeadingContent
                            title="Why This Matters for the Pharmaceutical Industry"
                            content="In an industry where speed, accuracy, and compliance can make or break operations, AI is not just an advantage — it's a necessity. Our solution proves that intelligent dashboards can reshape how pharma companies operate, making them more agile, compliant, and competitive."
                        /> */}

                       
                        <div className='border-bottom pb-3'></div>

                        {/* next content section */}
                        
{/* 
                        <div className='border-bottom'></div> */}

                        {/* next content section */}
                
                        {/* next para */}
                    

                        {/* next */}
                       
                        {/* next section */}
                      

                        {/* next section */}
                       

                    </div>

                    {/* sidebar */}

                    <div className="col-lg-4 sidebar">
                        {/* need to create different componets with useState */}
                        {/* <BlogSidebar /> */}
                    </div>

                    {/* code section */}
                    {/* <CodeSection/> */}

                    {/* form section */}

                    {/* last section */}


                </div>
            </div>
        </>
    )
}

export default AgentforceImplementation_First;