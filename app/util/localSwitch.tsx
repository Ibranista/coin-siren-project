'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { locales } from '@/constants/locals';
import { useState, MouseEvent } from 'react';
import Image from 'next/image';

const LocaleSwitch = () => {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = pathname?.split('/')[1] || 'en-US';
    const [locale, setLocale] = useState(currentLocale);

    const handleLocaleChange = (e: MouseEvent<HTMLButtonElement>, selectedLocale: string) => {
        e.preventDefault();
        const newPathname = `/${selectedLocale}${pathname?.slice(currentLocale.length + 1)}`;
        router.push(newPathname, { scroll: false });
        setLocale(selectedLocale);
    };

    const localeFlag = locale === 'en-US' ? '/usa_flag.png' : '/kor_flag.png';

    return (
        <section className='absolute -top-3 -right-3'>
            <button
                onClick={(e) => handleLocaleChange(e, locale === 'en-US' ? 'ko-KR' : 'en-US')}
            >
                <Image src={localeFlag} alt={locale} width={20} height={20} />
            </button>
        </section>
    );
};

export default LocaleSwitch;
