import React from 'react';
import LiquidPane from '../layout/LiquidPane';
import FloatingEmail from '../ui/FloatingEmail';
import SocialIcon3D from '../ui/SocialIcon3D';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { EMAIL, SOCIAL_LINKS } from '../../data/constants';

const ContactModal = ({ isOpen, onClose }) => {
    return (
        <LiquidPane isOpen={isOpen} onClose={onClose} title="Get In Touch" zIndex={110}>
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center min-h-[70vh]">
                <h2 className="text-[8vw] font-bold tracking-tighter leading-none mb-10">LET'S TALK</h2>
                <FloatingEmail email={EMAIL} />
                <div className="flex gap-12 mt-12">
                    <SocialIcon3D Icon={Github} href={SOCIAL_LINKS.github} />
                    <SocialIcon3D Icon={Linkedin} href={SOCIAL_LINKS.linkedin} />
                    <SocialIcon3D Icon={Instagram} href={SOCIAL_LINKS.instagram} />
                </div>
            </div>
        </LiquidPane>
    );
};

export default ContactModal;
