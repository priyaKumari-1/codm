import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import IntegrationFrameworkBlog_FirstSection from "./IntegrationFrameworkBlog_FirstSection/IntegrationFrameworkBlog_FirstSection";

function IntegrationFrameworkBlog() {
    return (
        <>
                <HeaderWithBg
                    title="Integration Framework"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                        { label: "Integration Framework", color: "purple-text" }
                    ]}
                />
                <IntegrationFrameworkBlog_FirstSection/>
        </>
    )
}

export default IntegrationFrameworkBlog;