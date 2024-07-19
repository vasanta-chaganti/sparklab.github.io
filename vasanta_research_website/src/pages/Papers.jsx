import './Papers.css';

function Papers() {
    const papers = [
        {
            authors: "J. Langlieb, G.Lee, V.Chaganti",
            title: "Quantifying the privacy-vs-performance trade-offs for fine-grained wireless network measurement data",
            journalConference: "In the Proceedings of ACM SIGCOMM 2022 Workshop on Network-Application Integration (NAI ’22)"
        },
        {
            authors: "T. Newhall, K. Webb, V. Chaganti, and A. Danner",
            title: "Introducing Parallel Computing in a Second CS Course",
            journalConference: "NSF/TCPP Workshop on Parallel and Distributed Computing Education (EduPar), May 2022. Best Paper Award"
        },
        {
            authors: "G.Lee, J. Langlieb, V.Chaganti",
            title: "Applying Differential Privacy to Anonymize User Mobility on a Large-Scale WiFi Campus Network",
            journalConference: "IMC-2019, Early Work, Tools and Datasets Track. Poster Presentation"
        },
        {
            authors: "V .Chaganti, J.Kurose, and A.Venkataramani",
            title: "A Cross-Architectural Quantitative Evaluation of Mobility Approaches",
            journalConference: "IEEE-INFOCOM, 2018. International Conference on Computer Communications, April 2018. Best In-session presentation Award"
        },
        {
            authors: "T.Thai, V.G.Chaganti, E.Lochin, J.Lacan, E.Dubois, P.Gelard",
            title: "Enabling E2E Reliable Communications with Adaptive re-Encoding over Delay Tolerant Networks",
            journalConference: "IEEE-ICC, 2015. IEEE-International Communications Conference, June, 2015"
        },
        {
            authors: "J.Steshenko, V.Chaganti, and J.Kurose",
            title: "Mobility in a Large-scale WiFi Network: From Syslog Events to Mobile User Sessions",
            journalConference: "Proceedings of the 17th ACM International conference on modeling, analysis and simulation of wireless and mobile systems, pp. 331–334, ACM, 2014. Best Poster and Demo Award"
        },
        {
            authors: "V.Chaganti",
            title: "Wireless Body Area Networks: Accuracy of Channel Modelling and Prediction",
            journalConference: "PhD thesis, The Australian National University, December 2014"
        },
        {
            authors: "V.Chaganti, L.Hanlen, and D.Smith",
            title: "Are Narrowband Wireless On-body Networks Wide Sense Stationary?",
            journalConference: "IEEE Transactions on Wireless Communications, vol.13, no.5, pp. 2432 – 2442, May 2014"
        },
        {
            authors: "V.Chaganti, L.Hanlen, and D.Smith",
            title: "Non-stationarity of body area networks for sleep monitoring",
            journalConference: "Electronics Letters, vol.49, no.15, pp.927-929, 2013"
        },
        {
            authors: "V.G.Chaganti, L.W.Hanlen, and T.A.Lamahewa",
            title: "Semi-Markov Modelling for Body Area Networks",
            journalConference: "IEEE-ICC, 2011. IEEE-International Communications Conference, June, 2011"
        },
        {
            authors: "L.W.Hanlen, V.G.Chaganti, B.Gilbert, D.Rodda, T.A.Lamahewa, and D.B.Smith",
            title: "Open-source test-bed for body area networks: 200 sample/sec, 12hrs. continuous measurement",
            journalConference: "IEEE International Symposium on Personal, Indoor and Mobile Radio Communications, PIMRC, Sept. 2010"
        },
        {
            authors: "V.G.Chaganti, D.B.Smith, and L.W.Hanlen",
            title: "Second-Order Statistics for Many-Link Body Area Networks",
            journalConference: "IEEE Antennas and Wireless Propagation Letters, vol.9, pp.322- 325, 2010"
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: "column", justContent: 'center', textAlign: 'center' }}>
            <h1>Papers</h1>
            <div className="allPapers">
                {papers.map((paper, index) => (
                    <div className='paper' key={index}>
                        <p>{paper.authors}</p>
                        <p>{paper.title}</p>
                        <p>{paper.journalConference}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Papers;