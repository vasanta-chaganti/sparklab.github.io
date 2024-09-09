import './Research.css';
import NetworkResearchGraph from '/src/assets/networkLatencyPic.png';
import DPGraph from '/src/assets/DP_Graph.png';

function Research() {
    const latencyResearch = `
Our project focuses on analyzing internet latency using various datasets, including Cloudflare, Measure Broadband America (MBA), RIPE Atlas, and Ookla. We investigate key metrics such as latency, jitter, upload/download speeds, and packet loss across these datasets. Our primary goals are to:

1. Verify the accuracy and applicability of each dataset.
2. Compare the datasets to evaluate their proper uses.
3. Identify and address concerns within the datasets.

Latency is measured by how quickly a packet travels from the user to a server and back, with factors such as network congestion and queue size affecting the results. Jitter, the variation in latency, is calculated differently across datasets, impacting how it is interpreted. Download and upload speeds are crucial for understanding network performance, and we observe significant differences in these metrics among datasets. By analyzing these aspects, we aim to ensure accurate data collection and usage, ultimately enhancing internet service reliability and performance.

The project's outcomes will be shared with Cloudflare and the community to promote better practices in measuring and interpreting network performance data. Future work includes comparing our current findings with the Ookla dataset, investigating high outliers and discrepancies, and developing recommendations to mitigate improper data usage.`;


    const dpResearch = `
Content distribution networks (CDNs) are groups of internet servers placed all over the world, to allow content to be pushed closer to the end user. In doing this, it is necessary to geo-locate the IP address of the user’s device. Network traces need to be released in order to improve network performance and better understand how users interact with the network. However, these large-scale datasets can be used to identify personal information about the users of the networks, which can compromise user privacy. Differential Privacy is our proposed solution for this problem. Differential privacy provides a quantifiable guarantee of privacy by inserting a controlled amount of noise into the data. The goal of differential privacy is to ensure privacy, for a controlled and reasonable tradeoff in accuracy.

In our research, we investigate the goodness-of-fit of queries, such as counts and range queries, for data analysis. Our first phase of research involves thorough data exploration, to determine our unit of privacy whether at the event-level or group-level. Furthermore, we compute a large range of queries to locate important global trends. This is toe ensure that our privacy parameters maintain a strong privacy guarantee without compromising trends important for understanding network-user interactions.

In the second phase, we will deploy differential privacy in our large-scale network dataset. Once we have finalized which metrics of the dataset we need to privatize and what level of privacy we can guarantee, we will explore various differentially private algorithms, from simple Laplace or Gaussian noise addition to more complex tools, such as MWEM or DAWA. We will also explore using open source differential privacy libraries, such as Ektelo or Open DP, which support said complex algorithms. Furthermore, we will investigate the possibility of reconstruction attacks undermining our privacy guarantees to improve our privacy parameters and further validate our guarantees.

We hope to be able to publicly release the differentially privatized data. We also hope to release our methods to allow for public engagement and testing the reproducibility of our work. The privacy risks associated with network tracing data are significant. Differential privacy offers a possible solution by providing a statistical guarantee of privacy while allowing the data to still accurately represent network trends and users.`;

    return (
        <div className='researchPage'>
            <br />
            <div className='projectItem'>
                <div className='projectTitle'>Analysis of Internet Latency Datasets</div>

                <div className='flexContainer'>
                    <div>
                        <img src={NetworkResearchGraph} alt='Network Research Graph' height='300px' width='300px' />
                    </div>

                    <div id='text' style={{ 'whiteSpace': 'pre-wrap' }}>
                        {latencyResearch}
                    </div>
                </div>
            </div>

            <br />

            <div className='projectItem'>
                <div className='projectTitle'>
                    Differential Privacy in the Wild: Privatizing Queries over a Large Corpus of Real-World Network Traces
                </div>

                <div className='flexContainer'>
                    <div>
                        <img src={DPGraph} alt='Differential Privacy Graph' height='300px' width='500px' />
                    </div>
                    <div id='text' style={{ 'whiteSpace': 'pre-wrap' }}>
                        {dpResearch}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Research;