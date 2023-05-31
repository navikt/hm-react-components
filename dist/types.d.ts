import React from 'react';

interface EndringsvarselProps {
    tittel: string;
    tekst: string;
    dato?: string;
}

declare const Endringsvarsel: React.FC<EndringsvarselProps>;

export { Endringsvarsel, EndringsvarselProps };
