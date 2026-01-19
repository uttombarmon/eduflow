import { uploadImage } from '@/lib/utils/uploadImage';
import { ImageIcon } from 'lucide-react'
import Image from 'next/image';

const ImageUpload = ({ courseData, setCourseData }: { courseData: any, setCourseData: any }) => {
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = await uploadImage(file);
            console.log(imageUrl)
            setCourseData({ ...courseData, thumbnail: imageUrl });
        }
    }
    return (
        <>
            {courseData?.thumbnail ? <Image src={courseData?.thumbnail} alt="course thumbnail" className='w-full h-full object-cover rounded-xl cursor-pointer absolute z-10' width={200} height={200} /> : <ImageIcon size={32} />}
            <span className="text-xs mt-2 font-medium relative">Upload Thumbnail</span>
            <input onChange={handleImageUpload} type="file" accept='image/*' className='absolute z-20 h-full w-full opacity-0 cursor-pointer' />
        </>
    )
}

export default ImageUpload