import React from "react";
import styled from "styled-components";
import { EndringsvarselProps } from "./Endringsvarsel.types";
import {
  SpeakerSoundWave3Icon
} from '@navikt/aksel-icons';

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

const Endringsvarsel: React.FC<EndringsvarselProps> = ({
  tittel,
  tekst,
  dato
}) => {
  return (
      <EndringsvarselContainer>
        <div style={{display: "flex",  alignItems: 'center', paddingRight: '1rem'}}>
          <IconSpan>
            <SpeakerSoundWave3Icon title="endringsvarsel" />
          </IconSpan>

        </div>
        <div>
          <div style={{fontWeight: 'bold'}}>{tittel}</div>
          <div>{tekst}</div>
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

export default Endringsvarsel;
