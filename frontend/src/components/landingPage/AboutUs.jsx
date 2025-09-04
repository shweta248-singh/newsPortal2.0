import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
const AboutUs = () => {
  const location = useLocation()

  return (
    <>
      {location?.pathname !== "/" && <Navbar />}
      <div className='row py-2'>
        <p className='fs-3 text-center'><b>About</b><b className='text-mycolor'>Us</b></p>
        <div className='col-sm-10 mx-auto'>
          <div className='row py-3'>
            <div className='col-sm-6 pt-3'>
              <p className='text-start'> Loktantra / The Loktantra is a digital news portal delivering Hindi-language coverage of national and international stories, with a focus on politics, society, and current affairs. One primary site, The Loktantra (द लोकतंत्र), features articles on major issues: from the Iran–Israel conflict and India’s foreign policy developments to regional politics like PM Modi’s rallies and reactions within the INDIA alliance
                Reddit
                +4
                Reddit
                +4
                loktantra24.in
                +4
                .

                Their coverage in June 2025 included reports such as security forces’ actions against Naxalite rebels in Chhattisgarh, analysis of communal and political mobilization around International Yoga Day, and cultural content like reality‐show stars’ earnings
                theloktantra.com
                .

                Elsewhere, Loktantra Media, another Hindi portal, publishes business, sports, entertainment and national news. Recent stories include updates on UPI regulations by NPCI, coverage of the Lok Sabha elections, and IPL matches—such as a game featuring Lucknow Super Giants and Gujarat Titans in April 2025    </p>
              <p className='text-start'> In the 20th century, radio and television became an important means of transmitting news. Whilst in the 21st century, the internet has also begun to play a similar role.
                .</p>
            </div>
            <div className='col-sm-6'>

              <iframe width="560" height="390" src="https://www.youtube.com/embed/Nq2wYlWFucg?si=MAhar19C-Xm_DKNv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>



          </div>
          <div className='row'>
            <div className='col-sm-4'>
              <img src="/cricket.jpg" className='img-thumbnail aboutimg w-100 border border-0 shadow-lg' alt="" />
            </div>
            <div className='col-sm-8 pt-2'>
              <p className='text-start'>Cricket is one of many games in the "club ball" sphere that involve hitting a ball with a hand-held implement. Others include baseball (which shares many similarities with cricket, both belonging in the more specific bat-and-ball games category[6]), golf, hockey, tennis, squash, badminton and table tennis.[</p>
            </div>
            <div className='row'>
              <p className='text-start'>  News is vital for a functioning society. It keeps citizens informed about current events, fostering awareness, and enabling informed decision-making. Furthermore, news acts as a watchdog, promoting accountability and transparency in institutions, and can be a catalyst for social change by highlighting injustices and inspiring action. </p>
            </div>
          </div>
          <hr />
          <div className='row py-3'>
            <p className='fs-3 text-center'><b>Our vision</b><b className='text-mycolor'> &Mission</b></p>
            <div className='col-sm-12'>
              <p className='text-center'><b className='text-mycolor'>"</b>To empower society with accurate, timely, and unbiased information, fostering an informed and engaged <b className='text-mycolor'>"</b> </p>
              <p className='text-center'><b text-mycolor>"</b>To gather, verify, and report facts with integrity, neutrality, and responsibility, ensuring public access to truth and diverse perspectives through ethical journalism.<b className='text-mycolor'>"</b></p>
            </div>

          </div>

        </div>

      </div>
    </>

  )
}

export default AboutUs
