import React from "react";
import styled from "styled-components";
import {EndringsvarselProps} from "./Endringsvarsel.types";

const EndringsvarselContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem;
`

const IconSpan = styled.span`
  display: flex;
  border-radius: 50%;
  background-color: #CCF1D6;
  padding: 0.25rem;
`


export const Endringsvarsel: React.FC<EndringsvarselProps> = ({
                                                                  tittel,
                                                                  tekst,
                                                                  dato,
                                                                  lenke,
                                                                  lenketekst
                                                              }) => {
    return (
        <EndringsvarselContainer>
            <div style={{display: "flex", alignItems: 'center', paddingRight: '1rem'}}>
                <IconSpan>
                    <Megaphone/>
                </IconSpan>

            </div>
            <div>
                <div style={{fontWeight: 'bold'}}>{tittel}</div>
                <div>{tekst} {lenke &&
                    <a href={lenke} target="_blank">{lenketekst}</a>
                }
                </div>
            </div>
            {dato &&
                <>
                    <div></div>
                    <div style={{paddingTop: '1rem'}}>Dato: {dato}</div>
                </>
            }
        </EndringsvarselContainer>
    )
}


const Megaphone = () => {
    return (
        <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             focusable="false" role="img">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19.03 4.97a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm-4.743.337A.75.75 0 0 1 14.75 6v12a.75.75 0 0 1-1.28.53l-.615-.614a7.25 7.25 0 0 0-4.1-2.05l-.005-.001V19a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-3.325A3.751 3.751 0 0 1 6 8.25h1.567c.253 0 .505-.018.755-.054l.432-.061a7.25 7.25 0 0 0 4.101-2.05l.395.394-.395-.395.615-.614a.75.75 0 0 1 .817-.163ZM6.75 15.75v2.5h.5v-2.5h-.5Zm.5-1.5H6a2.25 2.25 0 0 1 0-4.5h1.25v4.5Zm1.5.1.216.03a8.75 8.75 0 0 1 4.284 1.874V7.746A8.75 8.75 0 0 1 8.966 9.62l-.216.03v4.7ZM19 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Zm-2.53 5.22a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Z"
                  fill="currentColor"></path>
        </svg>
    )
}

export default Endringsvarsel;
