import { useState } from 'react'
import './Home.css'

function App() {
  const labDescription = `
Our research focuses on the analysis and privacy enhancement of large-scale network datasets.

Our work explores two main areas:

1. Internet Latency Analysis: We investigate the accuracy and comparability of various internet latency datasets, including Cloudflare, Measure Broadband America, RIPE Atlas, and Ookla. By examining metrics such as latency, jitter, and download/upload speeds, we aim to improve data collection practices and network performance understanding.

2. Differential Privacy in Network Traces: We address the privacy risks associated with releasing network trace data by applying differential privacy techniques. Our research involves exploring data analysis queries, implementing differential privacy algorithms, and evaluating the trade-off between privacy and data utility.

Overall, our research contributes to enhancing internet performance and user privacy by conducting rigorous analysis of network data and developing privacy-preserving solutions for data sharing.`

  return (
    <div className='homePage'>
      <img id='welcomeImage' src='https://static.vecteezy.com/system/resources/previews/001/971/958/non_2x/blue-abstract-line-art-background-with-text-placeholder-vector.jpg' alt='placeholder' />
      <div className='introduction' style={{ 'whiteSpace': 'pre-wrap' }}> {labDescription}</div >

    </div>
  )
}

export default App
