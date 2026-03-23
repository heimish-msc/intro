import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { GalleryGrid } from './components/GalleryGrid';
import { MobileMenu } from './components/MobileMenu';
import { EducationContent } from './components/EducationContent';
import { ProfileContent } from './components/ProfileContent';
import { LandingContent } from './components/LandingContent';

const work1Image = new URL('../work1.png', import.meta.url).href;
const work2Image = new URL('../work2.png', import.meta.url).href;
const distortedReflectionImage = new URL('../distorted-reflection.png', import.meta.url).href;
const mikrokosmosImage = new URL('../mikrokosmos.png', import.meta.url).href;
const traceImage = new URL('../trace.png', import.meta.url).href;
const nostalgiaImage = new URL('../nostalgia.png', import.meta.url).href;
const summerInMyYouthImage = new URL('../summer-in-my-youth.png', import.meta.url).href;
const photo1Image = new URL('../1.JPG', import.meta.url).href;
const photo2Image = new URL('../2.JPG', import.meta.url).href;
const photo3Image = new URL('../3.JPG', import.meta.url).href;
const photo4Image = new URL('../4.JPG', import.meta.url).href;
const profileImage = new URL('../profile.png', import.meta.url).href;
const photo5Image = new URL('../5.JPG', import.meta.url).href;
const photo6Image = new URL('../6.jpg', import.meta.url).href;
const photo7Image = new URL('../7.JPG', import.meta.url).href;
const photo8Image = new URL('../8.JPG', import.meta.url).href;
const photo9Image = new URL('../9.jpg', import.meta.url).href;
const photo10Image = new URL('../10.JPG', import.meta.url).href;
const photo11Image = new URL('../11.jpg', import.meta.url).href;

// Gallery data
const galleryData: Record<
  string,
  { id: number; title: string; category: string; imageUrl: string; description?: string }[]
> = {
  'Yeonwoo Seo': [
    {
      id: 1,
      title: '',
      category: '',
      imageUrl: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQwMTIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Glass Facade',
      category: 'Architecture',
      imageUrl: 'https://images.unsplash.com/photo-1675282500942-151fc0a73565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDAxMDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Contemporary Design',
      category: 'Architecture',
      imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MDgxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      title: 'Minimal Structure',
      category: 'Architecture',
      imageUrl: 'https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzM5NjcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Urban Spaces': [
    {
      id: 5,
      title: 'City Plaza',
      category: 'Urban Design',
      imageUrl: 'https://images.unsplash.com/photo-1675282500942-151fc0a73565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDAxMDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      title: 'Public Space',
      category: 'Urban Design',
      imageUrl: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQwMTIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 7,
      title: 'Street View',
      category: 'Urban Design',
      imageUrl: 'https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc0MDIwNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 8,
      title: 'Urban Landscape',
      category: 'Urban Design',
      imageUrl: 'https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzM5NjcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Minimalist Design': [
    {
      id: 9,
      title: 'Clean Lines',
      category: 'Minimalist',
      imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MDgxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 10,
      title: 'Simple Forms',
      category: 'Minimalist',
      imageUrl: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQwMTIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 11,
      title: 'White Space',
      category: 'Minimalist',
      imageUrl: 'https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzM5NjcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 12,
      title: 'Zen Aesthetic',
      category: 'Minimalist',
      imageUrl: 'https://images.unsplash.com/photo-1694100381966-5cf52917d452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjBwYXRod2F5fGVufDF8fHx8MTc3NDA4MTIzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Residential': [
    {
      id: 13,
      title: 'Living Room',
      category: 'Interior',
      imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MDgxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 14,
      title: 'Modern Kitchen',
      category: 'Interior',
      imageUrl: 'https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc0MDIwNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 15,
      title: 'Bedroom Design',
      category: 'Interior',
      imageUrl: 'https://images.unsplash.com/photo-1694100381966-5cf52917d452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjBwYXRod2F5fGVufDF8fHx8MTc3NDA4MTIzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 16,
      title: 'Open Space',
      category: 'Interior',
      imageUrl: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQwMTIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Commercial': [
    {
      id: 17,
      title: 'Office Space',
      category: 'Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc0MDIwNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 18,
      title: 'Retail Store',
      category: 'Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzM5NjcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 19,
      title: 'Restaurant',
      category: 'Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MDgxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 20,
      title: 'Workspace',
      category: 'Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1675282500942-151fc0a73565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDAxMDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Exhibitions': [
    {
      id: 21,
      title: 'Gallery Space',
      category: 'Exhibition',
      imageUrl: 'https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzM5NjcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 22,
      title: 'Art Display',
      category: 'Exhibition',
      imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MDgxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 23,
      title: 'Museum Design',
      category: 'Exhibition',
      imageUrl: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQwMTIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 24,
      title: 'Showcase',
      category: 'Exhibition',
      imageUrl: 'https://images.unsplash.com/photo-1694100381966-5cf52917d452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjBwYXRod2F5fGVufDF8fHx8MTc3NDA4MTIzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Landscapes': [
    {
      id: 25,
      title: 'Mountain View',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1694100381966-5cf52917d452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjBwYXRod2F5fGVufDF8fHx8MTc3NDA4MTIzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 26,
      title: 'Forest Path',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1675282500942-151fc0a73565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDAxMDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 27,
      title: 'Coastal Scene',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MDgxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 28,
      title: 'Desert Vista',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQwMTIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Urban': [
    {
      id: 29,
      title: 'City Streets',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1675282500942-151fc0a73565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDAxMDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 30,
      title: 'Night Lights',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQwMTIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 31,
      title: 'Skyline',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc0MDIwNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 32,
      title: 'Downtown',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzM5NjcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Nature': [
    {
      id: 33,
      title: 'Wild Woods',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1694100381966-5cf52917d452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjBwYXRod2F5fGVufDF8fHx8MTc3NDA4MTIzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 34,
      title: 'Green Valley',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MDgxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 35,
      title: 'Natural Light',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc0MDIwNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 36,
      title: 'Wilderness',
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1675282500942-151fc0a73565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDAxMDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Experience': [
    {
      id: 201,
      title: 'Studio Session',
      category: 'Experience',
      imageUrl: work1Image
    },
    {
      id: 202,
      title: 'Academic Results',
      category: 'Experience',
      imageUrl: 'https://images.unsplash.com/photo-1675282500942-151fc0a73565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDAxMDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 203,
      title: 'Teaching Track',
      category: 'Experience',
      imageUrl: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc0MDgxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 204,
      title: 'Public Program',
      category: 'Experience',
      imageUrl: work2Image
    },
    {
      id: 205,
      title: 'Composition Class',
      category: 'Experience',
      imageUrl: 'https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc0MDIwNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 206,
      title: 'Recital Coaching',
      category: 'Experience',
      imageUrl: 'https://images.unsplash.com/photo-1694100381966-5cf52917d452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjBwYXRod2F5fGVufDF8fHx8MTc3NDA4MTIzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 207,
      title: 'Master Thesis Support',
      category: 'Experience',
      imageUrl: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQwMTIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 208,
      title: 'Mentorship Program',
      category: 'Experience',
      imageUrl: 'https://images.unsplash.com/photo-1675282500942-151fc0a73565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDAxMDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  'Classical': [
    {
      id: 301,
      title: 'Distorted Reflection(2024)',
      category: 'Classical',
      imageUrl: distortedReflectionImage,
      description: '거울은 있는 그대로의 깨끗한 반영을 만들어 낸다. \n그러나 깨진 거울은 그렇지 않다. 깨진 거울은 아무리 이어 붙여도 ‘일그러진 반영’만 만들어 낼 뿐이다.\n‘Distorted Reflection’은 숲에 놓여있는 깨진 거울이 비추는 반영을 형상화한 곡이다. 고요한 숲에서의 풀이 스치는 소리, \n물방울이 떨어지는 소리 등은 유리 파편에 의해 조각난 채로 보인다.\n\nMirror makes a clear reflection, just the way it is. Broken Mirror, however, does not. \nNo matter how exquisitely stuck their broken pieces together, broken mirror can only make ‘distorted reflection.’\n‘Distorted Reflection’ is a piece embodying a reflection of broken mirror which is laid in the forest. Sounds of grazing grass, falling water drops and so forth seem broken into pieces by shards of the mirror.'
    },
    {
      id: 302,
      title: 'Mikrokosmos(2024)',
      category: 'Classical',
      imageUrl: mikrokosmosImage,
      description: '우리가 밤하늘을 바라볼 때, 우주는 마치 고요한 캔버스에 수놓인 보석처럼 아름답고 평온하게 느껴진다. 그러나 그 고요함의 이면에는 우주의 거대한 인력이 있다. 별들은 서로의 중력에 이끌려 회전하고, 수많은 천체들은 충돌과 깨짐을 반복하고 있다. 《Mikrokosmos》는 이러한 보이지 않는 우주의 역동성을 소리로 표현한 작품이다. 미세한 떨림부터 거친 진동에 이르기까지, 소리의 파편들이 모여 소우주의 모든 것이 움직이고 있음을 이 작품을 통해 알게 하고 싶었다.\n\nWhen we gaze at the night sky, the universe feels as serene and beautiful as jewels embroidered on a silent canvas. Yet, behind this tranquility lies the immense gravitational force of the cosmos. Stars spin, drawn by each other’s gravity, and countless celestial bodies collide and shatter in an endless cycle. 《Mikrokosmos》 is a work that captures this invisible dynamism of the universe through sound. From subtle tremors to fierce vibrations, fragments of sound come together to reveal that everything within this mikrokosmos is in constant motion. Through this piece, I wanted to evoke an awareness of the invisible forces that shape our ‘Mikrokosmos’.'
    },
    {
      id: 303,
      title: '자취(Trace) : 선, 결, 여백(2025)',
      category: 'Classical',
      imageUrl: traceImage,
      description: '빛은 지나가는 순간보다 그 흔적에서 더 많은 정보를 남긴다. 표면에 머무는 잔광, 공기 중에 퍼지는 산란, 응시한 후 망막에 남는 잔상까지, 이 작품은 빛이 이동하는 과정에서 발생하는 광학적 잔상(afterimage)을 소리로 표현한 것이다. 빛이 움직이며 남는 궤적은 하나의 형태로 고정되지 않고, 밀도, 온도, 속도의 변주처럼 변화하며 다른 층위를 형성한다. 이러한 불완전하고 일시적인 흔적들은 명확한 형체를 갖지 않지만, 오히려 그 모호함 속에서 공간을 다시 구성하고 확장한다. —이러한 흔적들의 집합이 ‘자취’이다.\n\nLight often reveals more in its traces than in the moment it passes. From the residual glow that lingers on surfaces, to the scattering that diffuses through the air, to the afterimage that remains on the retina after we look away—this work translates the optical aftereffects generated by moving light into sound. The trajectories left by light do not settle into a single form; instead, they shift like variations in density, temperature, and velocity, creating multiple perceptual layers. Although these traces are incomplete and fleeting, lacking a fixed shape, their very ambiguity reconfigures and expands the surrounding space. The accumulation of these subtle remnants constitutes what we might call a “trace.”'
    }
  ],
  'Pop': [
    {
      id: 401,
      title: 'Nostalgia',
      category: 'Pop',
      imageUrl: nostalgiaImage,
      description: 'Lyrics by 박서희, 장진호, Heimish\nComposed by 박서희, 장진호, Heimish\nArranged by 장진호, Heimish\n\nVocal by 박서희\nGuitar by 최석원\nBass by 정규홍\n\nMixed by 계소은, 장진호\nMastered by 계소은'
    },
    {
      id: 402,
      title: 'Summer in My Youth',
      category: 'Pop',
      imageUrl: summerInMyYouthImage,
      description: 'Composed by 소영, valv, 백야(jinho)\nLyrics by 소영, valv, 백야(jinho)\nArranged by 백야(jinho), Heimish\n\nExecutive producer 백야(jinho)\nVocal by 소영\nRap by valv\nBass by 곽현서(Jason Kwak)\n\nMixed by Jin clobert(진 클로베르), 백야(jinho)\nMastered by Jin clobert(진 클로베르)'
    }
  ],
  'Photography': [
    {
      id: 101,
      title: '',
      category: '',
      imageUrl: photo1Image
    },
    {
      id: 102,
      title: '',
      category: '',
      imageUrl: photo2Image
    },
    {
      id: 103,
      title: '',
      category: '',
      imageUrl: photo3Image
    },
    {
      id: 104,
      title: '',
      category: '',
      imageUrl: photo4Image
    },
    {
      id: 105,
      title: '',
      category: '',
      imageUrl: profileImage
    },
    {
      id: 106,
      title: '',
      category: '',
      imageUrl: photo5Image
    },
    {
      id: 107,
      title: '',
      category: '',
      imageUrl: photo6Image
    },
    {
      id: 108,
      title: '',
      category: '',
      imageUrl: photo7Image
    },
    {
      id: 109,
      title: '',
      category: '',
      imageUrl: photo8Image
    },
    {
      id: 110,
      title: '',
      category: '',
      imageUrl: photo9Image
    },
    {
      id: 111,
      title: '',
      category: '',
      imageUrl: photo10Image
    },
    {
      id: 112,
      title: '',
      category: '',
      imageUrl: photo11Image
    }
  ]
};

export default function App() {
  const defaultGallery = Object.keys(galleryData)[0];
  const [activeGallery, setActiveGallery] = useState<string>('Landing');

  const currentGalleryItems = galleryData[activeGallery] || galleryData[defaultGallery];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Mobile Menu */}
      <MobileMenu 
        onGalleryChange={setActiveGallery}
        activeGallery={activeGallery}
      />

      <div className="layout-container app-shell">
        {/* Desktop Sidebar */}
        <div className="hidden md:block sidebar-column">
          <Sidebar 
            onGalleryChange={setActiveGallery}
            activeGallery={activeGallery}
          />
        </div>

        {/* Main Content */}
        <main className="main-content pt-20 md:pt-12">
          {activeGallery === 'Landing' ? (
            <LandingContent onNavigate={setActiveGallery} />
          ) : activeGallery === 'Profile' ? (
            <ProfileContent />
          ) : activeGallery === 'Education' ? (
            <EducationContent />
          ) : (
            <GalleryGrid 
              items={currentGalleryItems}
              title={activeGallery}
            />
          )}
        </main>
      </div>
    </div>
  );
}